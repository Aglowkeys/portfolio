import type { FunctionComponent } from 'react';
import { Fade } from 'react-awesome-reveal';
import { StyledAbout } from './styles';
import { strings } from './strings';
import ButtonLink from '../ButtonLink';
import Container from '../Container';
import H2 from '../H2';
import { useLangContext } from '../../hooks/useLangContext';

const AboutMe: FunctionComponent = () => {
  const [lang] = useLangContext();
  const s = strings[lang];

  return (
    <StyledAbout aria-labelledby="about-title" className="selection-contrast">
      <Container>
        <Fade triggerOnce>
          <H2 id="about-title">{s.aboutMe}</H2>
        </Fade>
        <Fade triggerOnce>
          <p>{s.description}</p>
        </Fade>
        <Fade triggerOnce>
          <ButtonLink href="#portfolio" className="alternative">
            {s.seeProjects}
          </ButtonLink>
        </Fade>
      </Container>
    </StyledAbout>
  );
};

export default AboutMe;
