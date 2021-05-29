import styled from 'styled-components';

export const StyledHero = styled.div`
	width: 90%;
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	height: min-content;
	flex: 1;
	position: relative;

	.hero__info {
		display: flex;
		flex-direction: column;
		margin-top: 10rem;
		width: 70%;
		z-index: 10;
		flex-grow: 0;
		align-items: flex-start;

		@media (max-width: 600px) {
			width: 100%;
			align-items: center;
			text-align: center;

			.hero__tagline {
				font-size: var(--body-sm);
			}
		}
	}

	.hero__tagline {
		max-width: 30ch;
		margin-bottom: 2em;
		text-shadow: -1px -1px 0 var(--dark), 1px -1px 0 var(--dark), -1px 1px 0 var(--dark),
			1px 1px 0 var(--dark);
	}
`;
