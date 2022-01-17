import React, { useContext } from 'react';
import { StyledFooter } from './styles';
import { LanguageContext } from '../../LangContext';
import { strings } from './strings';
import Container from '../Container';
import { Github, Linkedin } from '@icons-pack/react-simple-icons';

const Footer = () => {
    const { Lang } = useContext(LanguageContext);
    const s = strings[Lang];

    return (
        <StyledFooter>
            <Container>
                <div className='footer__icons'>
                    <ul>
                        <li>
                            <a
                                href='https://github.com/Aglowkeys/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={s.github}
                            >
                                <Github size={35} />
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://www.linkedin.com/in/emiliano-alfonso/'
                                target='_blank'
                                rel='noopener noreferrer'
                                aria-label={s.linkedin}
                            >
                                <Linkedin size={35} />
                            </a>
                        </li>
                    </ul>
                </div>
                <p className='footer__mail'>
                    <a href='mailto:emilianoalfonso1989@gmail.com'>emilianoalfonso1989@gmail.com</a>
                </p>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
