import React from 'react';
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
	return (
		<StyledSkills>
			<Container>
				<H2>Habilidades</H2>
				<p>Estas son las tecnologías con las cuales me manejo:</p>
				<Fade>
					<SkillCards />
				</Fade>
			</Container>
		</StyledSkills>
	);
};

export default Skills;
