import type { FunctionComponent } from 'react';
import { Fade } from 'react-awesome-reveal';
import {
  Html5,
  CssThree,
  Sass,
  ReactJs,
  Redux,
  Nodedotjs,
  Express,
  Postgresql,
  Javascript,
  Nextdotjs,
  Typescript,
} from '@icons-pack/react-simple-icons';
import { StyledCardsContainer } from './styles';
import SkillCard from '../SkillCard';

const SkillCards: FunctionComponent = () => (
  <StyledCardsContainer>
    <Fade triggerOnce cascade damping={0.04}>
      <SkillCard Icon={Html5} text="HTML" />
      <SkillCard Icon={CssThree} text="CSS" />
      <SkillCard Icon={Javascript} text="JavaScript" />
      <SkillCard Icon={Typescript} text="TypeScript" />
      <SkillCard Icon={ReactJs} text="React" />
      <SkillCard Icon={Redux} text="Redux" />
      <SkillCard Icon={Nodedotjs} text="Node.js" />
      <SkillCard Icon={Express} text="Express" />
      <SkillCard Icon={Postgresql} text="PostgreSQL" />
      <SkillCard Icon={Sass} text="Sass" />
      <SkillCard Icon={Nextdotjs} text="Next.js" />
    </Fade>
  </StyledCardsContainer>
);

export default SkillCards;
