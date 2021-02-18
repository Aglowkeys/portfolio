import React, { useContext } from 'react';
import { LanguageContext } from '../LangContext';
import strings from './strings/Skills';

import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

import Container from './Container';
import H2 from './H2';
import SkillCards from './SkillCards';

const StyledSkills = styled.section`
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

const Skills = () => {
	const { Lang } = useContext(LanguageContext);
	const s = strings[Lang];

	return (
		<StyledSkills id='skills'>
			<Container>
				<H2>{s.title}</H2>
				<p>{s.description}</p>
				<Fade>
					<SkillCards />
				</Fade>
			</Container>
		</StyledSkills>
	);
};

export default Skills;
