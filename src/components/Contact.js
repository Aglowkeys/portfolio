import React, { useRef, useState } from 'react';
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

	form > div:not(.send__message) {
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
		font-size: var(--body-xs);
		font-weight: 600;
		text-transform: uppercase;
		padding: 0.5em;
		display: flex;
		align-items: center;

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
`;

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div className='input__container'>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input {...field} {...props} />
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
			<textarea {...field} {...props} />
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
	} = process.env;
	init(REACT_APP_USER);

	const formRef = useRef(null);
	let [sent, setSent] = useState(false);
	let [sendError, setSendError] = useState(false);

	return (
		<StyledContact id='contact'>
			<Container>
				<H2>Hablemos</H2>
				<p>
					¡No dudes en contactarme para cualquier consulta! Los
					enlaces a mis redes están abajo.
				</p>
				<Formik
					initialValues={{
						name: '',
						email: '',
						message: '',
					}}
					validationSchema={Yup.object({
						name: Yup.string()
							.min(
								3,
								'El nombre debe tener al menos 3 caracteres de largo.'
							)
							.required('Ingresa tu nombre.')
							.matches(
								/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
								'El nombre ingresado no es válido.'
							),
						message: Yup.string().required('Ingresa un mensaje.'),
						email: Yup.string()
							.email(
								'El correo electrónico ingresado es inválido.'
							)
							.required('Ingresa un correo electrónico.'),
					})}
					onSubmit={(values, { setSubmitting }) => {
						emailjs
							.sendForm(
								REACT_APP_SERVICE,
								REACT_APP_TEMPLATE,
								formRef.current
							)
							.then(() => {
								setSendError(false);
								setSent(true);
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
									label='Nombre'
									name='name'
									type='text'
									placeholder='Nombre'
								/>
								<MyTextInput
									id='email'
									label='E-mail'
									name='email'
									type='email'
									placeholder='Correo electrónico'
								/>
							</div>
							<MyTextarea
								id='message'
								label='message'
								name='message'
								placeholder='Mensaje'
							/>
							<Button
								alternative='alternative'
								type='submit'
								disabled={formik.isSubmitting}
							>
								Enviar
								{formik.isSubmitting && <Spinner />}
							</Button>
							<div className='send__message'>
								{sent && (
									<>
										<div className='svg-container'>
											<Success />
										</div>
										¡Tu mensaje fue enviado! Me contactaré a
										la brevedad.
									</>
								)}
								{sendError && (
									<>
										<div className='svg-container'>
											<Exclamation />
										</div>
										Ocurrió un error al enviar tu mensaje.
										Por favor, vuelve a intentarlo.
									</>
								)}
							</div>
						</Form>
					)}
				</Formik>
				{/* 	<form>
					<div>
						<label htmlFor='name'>Nombre:</label>
						<input
							required
							name='name'
							id='name'
							type='text'
							placeholder='Tu nombre'
						/>

						<label htmlFor='email'>E-mail:</label>
						<input
							required
							name='email'
							id='email'
							type='text'
							placeholder='Tu e-mail'
						/>
					</div>

					<label htmlFor='message'>Mensaje:</label>
					<textarea
						required
						name='message'
						id='message'
						placeholder='Tu mensaje'
					/>

					<Button alternative='alternative' type='submit'>
						Enviar
					</Button>
				</form> */}
			</Container>
		</StyledContact>
	);
};

export default Contact;
