import React, { useContext } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { LanguageContext } from '../../LangContext';
import { StyledHero } from './styles';
import { strings } from './strings';
import Name from '../Name';
import Me from '../Me';
import ButtonLink from '../ButtonLink';

const Hero = () => {
  const { Lang } = useContext(LanguageContext);
  const s = strings[Lang];

  return (
    <StyledHero id='hero'>
      <div className='hero__info'>
        <Slide triggerOnce direction='down' duration={500}>
          <Fade triggerOnce delay={300}>
            <Name />
          </Fade>
        </Slide>
        <Slide triggerOnce direction='down' duration={500} delay={200}>
          <Fade triggerOnce delay={450} cascade damping={0.2}>
            <p className='hero__tagline'>{s.description}</p>
            <ButtonLink link={s.cvLink}>{s.downloadCV}</ButtonLink>
          </Fade>
        </Slide>
      </div>
      <Fade triggerOnce delay={150}>
        <Me className='hero__photo' />
      </Fade>
    </StyledHero>
  );
};

export default Hero;
