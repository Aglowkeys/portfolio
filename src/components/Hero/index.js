import React, { useContext } from 'react';
import { LanguageContext } from '../../LangContext';
import { StyledHero } from './styles';
import strings from './strings';

import Fade from 'react-reveal/Fade';
import Name from '../Name';
import Me from '../Me';
import ButtonLink from '../ButtonLink';

const Hero = () => {
    const { Lang } = useContext(LanguageContext);
    const s = strings[Lang];

    return (
        <StyledHero id='hero'>
            <div className='hero__info'>
                <Fade>
                    <Name />
                </Fade>
                <p className='hero__tagline'>{s.description}</p>
                <ButtonLink link={s.cvLink}>{s.downloadCV}</ButtonLink>
            </div>
            <Me className='hero__photo' />
        </StyledHero>
    );
};

export default Hero;
