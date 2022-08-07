import type { FunctionComponent } from 'react';
import { Github, Linkedin } from '@icons-pack/react-simple-icons';
import { StyledFooter } from './styles';
import { strings } from './strings';
import Container from '../Container';
import { useLangContext } from '../../hooks/useLangContext';

const Footer: FunctionComponent = () => {
  const [lang] = useLangContext();
  const s = strings[lang];

  return (
    <StyledFooter>
      <Container>
        <div className="footer__icons">
          {/*
            * The next line is needed in order to restore the semantic meaning of list to the <ul>.
            * Since "list-style: none" was applied via CSS, Apple's VoiceOver does not announce it as a list anymore.
          */}
          {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
          <ul role="list" aria-label={s.social}>
            <li>
              <a
                href="https://github.com/Aglowkeys/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Github"
              >
                <Github size={35} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/emiliano-alfonso/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={35} />
              </a>
            </li>
          </ul>
        </div>
        <p className="footer__mail">
          <a href="mailto:emilianoalfonso1989@gmail.com">emilianoalfonso1989@gmail.com</a>
        </p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
