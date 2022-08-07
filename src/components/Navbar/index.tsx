import type { FunctionComponent } from 'react';
import { StyledNavbar } from './styles';
import { strings } from './strings';
import Container from '../Container';
import { useLangContext } from '../../hooks/useLangContext';

const Navbar: FunctionComponent = () => {
  const [lang, setLang] = useLangContext();
  const s = strings[lang];
  const newLang = lang === 'es' ? 'en' : 'es';

  const toggleLang = () => {
    setLang(newLang);
    localStorage.setItem('siteLanguage', newLang);
  };

  // TODO: El botón de cambiar idioma debería formar parte de la <nav> o el <ul>?
  // Ver si se puede mejorar la semántica. Usar <abbr> si hace falta.
  return (
    <StyledNavbar tabIndex={-1}>
      <Container>
        <a href="#hero" className="skip-content-link">
          {s.skipContent}
        </a>
        {/*
          * The next line is needed in order to restore the semantic meaning of list to the <ul>.
          * Since "list-style: none" was applied via CSS, Apple's VoiceOver does not announce it as a list anymore.
        */}
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
        <ul role="list">
          <li>
            <a href="#skills">{s.skills}</a>
          </li>
          <li>
            <a href="#portfolio">{s.portfolio}</a>
          </li>
          <li>
            <a href="#contact">{s.contact}</a>
          </li>
          <li>
            <button aria-label={s.ariaLabel} onClick={toggleLang} type="button">
              {s.lang}
            </button>
          </li>
        </ul>
      </Container>
    </StyledNavbar>
  );
};

export default Navbar;
