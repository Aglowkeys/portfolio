import React, { useContext } from 'react';
import { StyledSkills } from './styles';
import { LanguageContext } from '../../LangContext';
import strings from './strings';

import Fade from 'react-reveal/Fade';

import Container from '../Container';
import H2 from '../H2';
import SkillCardsContainer from '../SkillCardsContainer';

const Skills = () => {
	const { Lang } = useContext(LanguageContext);
	const s = strings[Lang];

	return (
		<StyledSkills id='skills'>
			<Container>
				<H2>{s.title}</H2>
				<p>{s.description}</p>
				<Fade>
					<SkillCardsContainer />
				</Fade>
			</Container>
		</StyledSkills>
	);
};

export default Skills;
