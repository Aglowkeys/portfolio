import { useContext } from 'react';
import { LanguageContext } from '../LangContext';
import strings from './strings/AboutMe';

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
	const { Lang } = useContext(LanguageContext);
	const s = strings[Lang];

	return (
		<StyledAbout className='selection-contrast'>
			<Container>
				<Fade>
					<H2>{s.aboutMe}</H2>
				</Fade>
				<Fade>
					<p>{s.description}</p>
				</Fade>
				<Fade>
					<ButtonLink
						link='#portfolio'
						alternative='alternative'
						blank={false}
					>
						{s.seeProjects}
					</ButtonLink>
				</Fade>
			</Container>
		</StyledAbout>
	);
};

export default AboutMe;
