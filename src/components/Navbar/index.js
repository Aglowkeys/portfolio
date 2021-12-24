import { StyledNavbar } from './styles';
import { useContext } from 'react';
import { LanguageContext } from '../../LangContext';
import strings from './strings';
import Container from '../Container';

const Navbar = () => {
    const { Lang, setLang } = useContext(LanguageContext);
    const s = strings[Lang];
    const newLang = Lang === 'es' ? 'en' : 'es';

    const toggleLang = () => {
        setLang(newLang);
        localStorage.setItem('siteLanguage', newLang);
    };

    return (
        <StyledNavbar tabIndex='-1'>
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
