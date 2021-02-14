import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import Name from './Name';
import Me from './Me';
import Navbar from './Navbar';
import ButtonLink from './ButtonLink';

const StyledHeader = styled.header`
	min-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	@media (max-width: 600px) {
		min-height: 80vh;
	}
`;

const Hero = styled.div`
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
		text-shadow: -1px -1px 0 var(--dark), 1px -1px 0 var(--dark),
			-1px 1px 0 var(--dark), 1px 1px 0 var(--dark);
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Navbar />
			<Hero>
				<div className='hero__info'>
					<Fade>
						<Name />
					</Fade>
					<p className='hero__tagline'>
						Soy un diseñador web que hace foco en el detalle, los
						diseños simples, accesibles y adaptables.
					</p>
					<ButtonLink link='../assets/CV.pdf'>
						Descargar CV
					</ButtonLink>
				</div>
				<Me className='hero__photo' />
			</Hero>
		</StyledHeader>
	);
};

export default Header;
