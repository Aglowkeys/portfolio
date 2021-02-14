import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import ButtonLink from './ButtonLink';
import Container from './Container';
import H2 from './H2';

const StyledAbout = styled.section`
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

const AboutMe = () => {
	return (
		<StyledAbout className='selection-contrast'>
			<Container>
				<Fade>
					<H2>Sobre mí</H2>
				</Fade>
				<Fade>
					<p>
						Desarrollador freelance, docente de música, amante del
						Front-end. Realicé un bootcamp de más de 700 hs. de
						estudio intensivo que me preparó para desempeñarme como
						desarrollador Fullstack, ideando proyectos reales y
						complejos, además de potenciar mis habilidades
						interpersonales y haberme permitido ser mentor de
						estudiantes principiantes.
					</p>
				</Fade>
				<Fade>
					<ButtonLink
						link='#portfolio'
						alternative='alternative'
						blank={false}
					>
						Ver mis proyectos
					</ButtonLink>
				</Fade>
			</Container>
		</StyledAbout>
	);
};

export default AboutMe;
