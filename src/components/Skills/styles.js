import styled from 'styled-components';

export const StyledSkills = styled.section`
	padding: 7em 0 3em;

	& > * {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h2 {
		color: var(--primary-100);
	}
	h2 + p {
		text-align: center;
		max-width: 60ch;
		margin-bottom: 2em;
	}
`;
