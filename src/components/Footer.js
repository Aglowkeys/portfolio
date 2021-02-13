import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { Github, Linkedin } from '@icons-pack/react-simple-icons';
const StyledFooter = styled.footer`
	padding: 3em 0;
	position: relative;

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
	}
`;

const Footer = () => {
	return (
		<StyledFooter>
			<Container>
				<div className='footer__icons'>
					<ul>
						<li>
							<Github size={35} />
						</li>
						<li>
							<Linkedin size={35} />
						</li>
					</ul>
				</div>
				<p>emilianoalfonso1989@gmail.com</p>
			</Container>
		</StyledFooter>
	);
};

export default Footer;
