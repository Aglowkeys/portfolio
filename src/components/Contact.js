import React from 'react';
import { useForm } from 'react-hook-form';

import H2 from './H2';
import styled from 'styled-components';
import Container from './Container';
import Button from './Button';

const StyledContact = styled.section`
	background: var(--primary-200);
	margin-top: 7em;
	padding: 5em 0;
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

	form div {
		width: 100%;
		display: flex;
		justify-content: space-between;

		@media (max-width: 700px) {
			flex-direction: column;
		}
	}

	input {
		min-width: 0;
		flex: 0 1 50%;
	}

	input:last-of-type {
		margin-left: 1em;
		@media (max-width: 700px) {
			margin: 1em 0 0;
		}
	}

	textarea {
		margin: 1em 0;
		width: 100%;
		min-height: 8em;
	}
`;

const Contact = () => {
	const { register, handleSubmit, errors } = useForm();

	const formSubmit = (data) => {
		console.log(data);
	};
	return (
		<StyledContact id='contact'>
			<Container>
				<H2>Hablemos</H2>
				<p>
					¡No dudes en contactarme para cualquier consulta y te
					responderé a la brevedad! Los enlaces a mis redes están
					abajo.
				</p>
				<form onSubmit={handleSubmit(formSubmit)}>
					<div>
						<label htmlFor='name'>Nombre:</label>
						<input
							required
							name='name'
							ref={register}
							id='name'
							type='text'
							placeholder='Nombre'
						/>

						<label htmlFor='email'>E-mail:</label>
						<input
							required
							name='email'
							ref={register}
							id='email'
							type='text'
							placeholder='nombre@mail.com'
						/>
					</div>

					<label htmlFor='message'>Mensaje:</label>
					<textarea
						required
						name='message'
						ref={register}
						id='message'
						placeholder='Mensaje'
					/>

					<Button alternative='alternative' type='submit'>
						Enviar
					</Button>
				</form>
			</Container>
		</StyledContact>
	);
};

export default Contact;
