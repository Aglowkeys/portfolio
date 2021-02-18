import React, { useRef, useState, useContext } from 'react';
import { LanguageContext } from '../LangContext';
import strings from './strings/Contact';

import { Formik, Form, useField, Field } from 'formik';
import * as Yup from 'yup';
import emailjs, { init } from 'emailjs-com';
import styled from 'styled-components';

import H2 from './H2';
import Container from './Container';
import Button from './Button';
import Exclamation from './Exclamation';
import Success from './Success';
import Spinner from './Spinner';

const StyledContact = styled.section`
	background: var(--primary-200);
	margin-top: 7em;
	padding: 5em 0 4em;
	clip-path: polygon(0 0, 100% 13%, 100% 100%, 0% 100%);

	& > * {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		text-align: center;
		margin-top: 1em;
	}

	p {
		max-width: 50ch;
		margin: 0 auto;
	}

	form {
		margin-top: 2em;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	form > div:first-child {
		width: 100%;
		display: flex;
		flex-wrap: no-wrap;
		justify-content: space-between;

		@media (max-width: 700px) {
			flex-direction: column;
		}
	}

	.input__container,
	.textarea__container {
		flex: 1;
	}

	.textarea__container {
		width: 100%;
	}

	.input__container:last-of-type {
		margin-left: 1em;
		@media (max-width: 700px) {
			margin: 1em 0 0;
		}
	}

	input {
		width: 100%;
		min-width: 0;
	}

	.textarea__container {
		flex-direction: column;
		margin-bottom: 1em;
	}
	textarea {
		margin: 1em 0 0;
		width: 100%;
		min-height: 8em;
	}

	.input__error {
		background-color: var(--error);
		font-size: var(--body-xs);
		font-weight: 600;
		text-transform: uppercase;
		padding: 0.75em;
		display: flex;
		align-items: flex-start;
		line-height: 1.5;

		.error__svg-container {
			flex-shrink: 0;
			width: 1.7em;
			height: 1.7em;
			margin-right: 1em;
		}
	}
	.send__message {
		font-size: var(--body-sm);
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: no-wrap;
		margin-top: 1em;

		.svg-container {
			flex-shrink: 0;
			width: 2em;
			height: 2em;
			margin-right: 1em;
		}
	}

	button svg {
		margin-left: 1em;
		vertical-align: middle;
		width: 1em;
		height: 1em;
	}

	.g-recaptcha {
		margin-bottom: 1em;
	}
`;

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className='input__container'>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input
				{...field}
				{...props}
				required='true'
				aria-required='true'
				aria-invalid={meta.error ? 'true' : 'false'}
				aria-describedby={meta.error ? meta.error : null}
			/>
			{meta.touched && meta.error ? (
				<div className='input__error'>
					<div className='error__svg-container'>
						<Exclamation />
					</div>
					{meta.error}
				</div>
			) : null}
		</div>
	);
};
const MyTextarea = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className='textarea__container'>
			<label htmlFor={props.id || props.name}>{label}</label>
			<textarea
				{...field}
				{...props}
				required='true'
				aria-required='true'
				aria-invalid={meta.error ? 'true' : 'false'}
				aria-describedby={meta.error ? meta.error : null}
			/>
			{meta.touched && meta.error ? (
				<div className='input__error'>
					<div className='error__svg-container'>
						<Exclamation />
					</div>
					{meta.error}
				</div>
			) : null}
		</div>
	);
};

const Contact = () => {
	const {
		REACT_APP_SERVICE,
		REACT_APP_TEMPLATE,
		REACT_APP_USER,
		REACT_APP_CAPTCHA_SITE_KEY,
	} = process.env;
	init(REACT_APP_USER);

	const { Lang } = useContext(LanguageContext);
	const s = strings[Lang];

	const formRef = useRef(null);
	let [sent, setSent] = useState(false);
	let [sendError, setSendError] = useState(false);

	return (
		<StyledContact id='contact'>
			<Container>
				<H2>{s.title}</H2>
				<p>{s.description}</p>
				<Formik
					initialValues={{
						name: '',
						email: '',
						message: '',
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.min(3, s.errorNameShort)
							.required(s.errorNameIncomplete)
							.matches(
								/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
								s.errorNameInvalid
							),
						message: Yup.string().required(s.errorMessage),
						email: Yup.string()
							.email(s.errorEmailInvalid)
							.required(s.errorEmailIncomplete),
					})}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						emailjs
							.sendForm(
								REACT_APP_SERVICE,
								REACT_APP_TEMPLATE,
								formRef.current
							)
							.then(() => {
								setSendError(false);
								setSent(true);
								resetForm({
									values: {
										name: '',
										email: '',
										message: '',
									},
								});
							})
							.catch(() => {
								setSent(false);
								setSendError(true);
							})
							.finally(() => setSubmitting(false));
					}}
				>
					{(formik) => (
						<Form ref={formRef}>
							<div>
								<MyTextInput
									id='name'
									label={s.labelName}
									name='name'
									type='text'
									placeholder={s.placeholderName}
								/>
								<MyTextInput
									id='email'
									label={s.labelEmail}
									name='email'
									type='email'
									placeholder={s.placeholderEmail}
								/>
							</div>
							<MyTextarea
								id='message'
								label={s.labelMessage}
								name='message'
								placeholder={s.placeholderMessage}
							/>
							<div
								className='g-recaptcha'
								data-sitekey={REACT_APP_CAPTCHA_SITE_KEY}
							></div>

							<Button
								alternative='alternative'
								type='submit'
								disabled={formik.isSubmitting}
							>
								{formik.isSubmitting ? s.sending : s.send}
								{formik.isSubmitting && <Spinner />}
							</Button>
							<div className='send__message'>
								{sent && (
									<>
										<div className='svg-container'>
											<Success />
										</div>
										{s.sendSuccess}
									</>
								)}
								{sendError && (
									<>
										<div className='svg-container'>
											<Exclamation />
										</div>
										{s.sendError}
									</>
								)}
							</div>
						</Form>
					)}
				</Formik>
			</Container>
		</StyledContact>
	);
};

export default Contact;
