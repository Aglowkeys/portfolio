import type { FunctionComponent } from 'react';
import { StyledSkills } from './styles';
import { strings } from './strings';
import { useLangContext } from '../../hooks/useLangContext';
import Container from '../Container';
import H2 from '../H2';
import SkillCardsContainer from '../SkillCardsContainer';

const Skills: FunctionComponent = () => {
  const [lang] = useLangContext();
  const s = strings[lang];

  return (
    <StyledSkills aria-labelledby="skills-title" id="skills">
      <Container>
        <H2 id="skills-title">{s.title}</H2>
        <p>{s.description}</p>
        <SkillCardsContainer />
      </Container>
    </StyledSkills>
  );
};

export default Skills;
