import styled from 'styled-components';

export const StyledProjects = styled.section`
	padding: 7em 0 3em;

	h2 {
		color: var(--primary-100);
	}

	& > * {
		display: flex;
		justify-content: center;

		@media (max-width: 800px) {
			flex-direction: column;
		}

		& > div {
			flex: 1 1 50%;
		}
	}

	.projects__header {
		position: -webkit-sticky;
		position: sticky;
		top: 8em;
		align-self: flex-start;
		width: auto;
		padding-right: 4em;
		margin-bottom: 4em;

		@media (max-width: 800px) {
			position: static;
		}
	}

	.projects__list {
		z-index: 10;
		background-color: var(--dark);
	}
`;
