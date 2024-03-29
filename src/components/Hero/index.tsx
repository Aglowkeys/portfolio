import type { FunctionComponent } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { StyledHero } from './styles';
import { strings } from './strings';
import Name from '../Name';
import Me from '../Me';
import ButtonLink from '../ButtonLink';
import { useLangContext } from '../../hooks/useLangContext';

const Hero: FunctionComponent = () => {
  const [lang] = useLangContext();
  const s = strings[lang];

  return (
    <StyledHero id="hero">
      <div className="hero__info">
        <Slide triggerOnce direction="down" duration={500}>
          <Fade triggerOnce delay={300}>
            <Name />
          </Fade>
        </Slide>
        <Slide triggerOnce direction="down" duration={500} delay={200}>
          <Fade triggerOnce delay={450} cascade damping={0.2}>
            <p className="hero__tagline">{s.description}</p>
            <ButtonLink href={s.cvLink}>{s.downloadCV}</ButtonLink>
          </Fade>
        </Slide>
      </div>
      <Fade triggerOnce delay={150}>
        <Me />
      </Fade>
    </StyledHero>
  );
};

export default Hero;
