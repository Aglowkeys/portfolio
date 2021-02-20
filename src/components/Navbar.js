import { useContext } from 'react';
import { LanguageContext } from '../LangContext';
import strings from './strings/Navbar';

import styled from 'styled-components';
import Container from './Container';

const StyledNavbar = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	padding: 2em 0;
	background: var(--dark);
	border-bottom: 1px solid #333;
	z-index: 30;
	outline: 0;

	@media (max-width: 550px) {
		padding: 1em 0;
	}

	ul {
		display: flex;
		justify-content: center;
		list-style: none;
		text-transform: uppercase;
		font-weight: 800;
		font-size: var(--body-sm);

		@media (max-width: 550px) {
			font-size: var(--body-xs);
		}

		& > li + li {
			margin-left: 3em;

			@media (max-width: 550px) {
				margin-left: 2em;
			}
		}

		a {
			color: inherit;
			text-decoration: none;
			position: relative;

			&:hover,
			&:focus {
				outline: none;
				color: var(--primary-100);
			}

			&:hover::before,
			&:focus::before {
				content: '';
				height: 5px;
				background-image: linear-gradient(
					45deg,
					var(--primary-100),
					var(--secondary)
				);
				position: absolute;
				bottom: -0.5em;
				left: 0;
				right: 0;

				@media (max-width: 550px) {
					height: 3px;
				}
			}
		}
		button {
			cursor: pointer;
			font-size: inherit;
			padding: 0;
			background: transparent;
			border: none;
			color: inherit;
			text-decoration: none;
			position: relative;

			&:hover,
			&:focus {
				outline: none;
				color: var(--primary-100);
			}

			&:hover::before,
			&:focus::before {
				content: '';
				height: 5px;
				background-image: linear-gradient(
					45deg,
					var(--primary-100),
					var(--secondary)
				);
				position: absolute;
				bottom: -0.5em;
				left: 0;
				right: 0;

				@media (max-width: 550px) {
					height: 3px;
				}
			}
		}
	}
`;

const Navbar = () => {
	const { Lang, setLang } = useContext(LanguageContext);
	const s = strings[Lang];
	const newLang = Lang === 'es' ? 'en' : 'es';
	return (
		<StyledNavbar tabIndex='-1'>
			<Container>
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
						<button
							aria-label={s.ariaLabel}
							title={s.ariaLabel}
							onClick={() => {
								setLang(newLang);
								localStorage.setItem('siteLanguage', newLang);
							}}
						>
							{s.lang}
						</button>
					</li>
				</ul>
			</Container>
		</StyledNavbar>
	);
};

export default Navbar;
