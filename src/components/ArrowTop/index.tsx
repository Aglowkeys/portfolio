import { useState, type FunctionComponent } from 'react';
import { ArrowStyled } from './styles';
import { strings } from './strings';
import { useLangContext } from '../../hooks/useLangContext'

const ArrowTop: FunctionComponent = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [lang] = useLangContext()
    const s = strings[lang];

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const nav = document.querySelector('nav')!;
        nav.focus();
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <ArrowStyled
            onClick={scrollTop}
            tabIndex={0}
            style={{ display: showScroll ? 'flex' : 'none' }}
            aria-label={s.goTop}
        >
            <svg
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z' />
            </svg>
        </ArrowStyled>
    );
};

export default ArrowTop;
