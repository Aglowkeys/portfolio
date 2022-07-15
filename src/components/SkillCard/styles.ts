import styled from 'styled-components';

export const StyledSkillCard = styled.div`
	cursor: default;
	box-sizing: content-box;
	padding: 2em;
	width: 7rem;
	transition: all 0.3s ease;
	position: relative;

	@media (max-width: 700px) {
		width: 5rem;
		padding: 1em;
	}

	&:hover {
		background: var(--light);
		transform: scale(1.1);
		box-shadow: 5px 5px 0px var(--primary-200);
		color: var(--dark);
	}

	svg {
		width: 100%;
		height: 100%;
	}

	p {
		margin-top: 0.5em;
		font-size: var(--body-sm);
		text-align: center;
	}
`;
