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

    return (
        <StyledNavbar tabIndex={-1}>
            <Container>
                <a href='#hero' className='skip-content-link'>
                    {s.skipContent}
                </a>
                <ul>
                    <li>
                        <a href='#skills'>{s.skills}</a>
                    </li>
                    <li>
                        <a href='#portfolio'>{s.portfolio}</a>
                    </li>
                    <li>
                        <a href='#contact'>{s.contact}</a>
                    </li>
                    <li>
                        <button aria-label={s.ariaLabel} onClick={toggleLang}>
                            {s.lang}
                        </button>
                    </li>
                </ul>
            </Container>
        </StyledNavbar>
    );
};

export default Navbar;
