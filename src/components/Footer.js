import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Github, Linkedin } from '@icons-pack/react-simple-icons';
const StyledFooter = styled.footer`
	padding: 3em 0;
	position: relative;

	a {
		color: currentColor;
	}

	a:hover {
		color: var(--primary-100);
	}

	& > * {
		display: flex;
		justify-content: space-between;
		align-items: center;

		@media (max-width: 700px) {
			flex-direction: column;
		}
	}

	&::before {
		content: '';
		height: 5px;
		background-image: linear-gradient(
			45deg,
			var(--primary-100),
			var(--secondary)
		);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

	ul {
		display: flex;
		list-style: none;
		@media (max-width: 700px) {
			margin-bottom: 1em;
		}

		li:last-child {
			margin-left: 2em;
		}

		a:focus {
			outline: 4px dotted var(--primary-100);
			outline-offset: 0.5em;
		}
	}

	.footer__mail a {
		text-decoration: none;
		position: relative;

		&:hover,
		&:focus {
			outline: none;
			color: var(--primary-100);
		}

		@media (max-width: 550px) {
			font-size: var(--body-sm);
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
`;

const Footer = () => {
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
								aria-label='Ver mi perfil en Github'
							>
								<Github size={35} />
							</a>
						</li>
						<li>
							<a
								href='https://www.linkedin.com/in/emiliano-alfonso/'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Ver mi perfil en LinkedIn'
							>
								<Linkedin size={35} />
							</a>
						</li>
					</ul>
				</div>
				<p className='footer__mail'>
					<a href='mailto:emilianoalfonso1989@gmail.com'>
						emilianoalfonso1989@gmail.com
					</a>
				</p>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
