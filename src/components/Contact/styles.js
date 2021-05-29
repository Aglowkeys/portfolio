import styled from 'styled-components';

export const StyledContact = styled.section`
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
`;
