import styled from 'styled-components';

export const StyledAbout = styled.section`
	background: var(--primary-200);
	margin-top: -3em;
	padding: 5em 0;
	clip-path: polygon(0 13%, 100% 0, 100% 100%, 0% 100%);
	position: relative;
	z-index: 10;

	@media (max-width: 550px) {
		margin-top: 0;
	}

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

	a {
		display: inline-block;
		margin: 2em auto 0;

		&:focus {
			outline: 4px dotted var(--light);
			outline-offset: 0.5em;
		}
	}
`;
