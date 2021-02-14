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

	ul {
		display: flex;
		justify-content: center;
		list-style: none;
		text-transform: uppercase;
		font-weight: 800;
		font-size: var(--body-md);

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
			padding-bottom: 0.2em;
			border-bottom: 4px solid transparent;
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
			}
		}
	}
`;

const Navbar = () => {
	return (
		<StyledNavbar>
			<Container>
				<ul>
					<li>
						<a href='http://google.com/'>Habilidades</a>
					</li>
					<li>
						<a href='http://google.com/'>Portfolio</a>
					</li>
					<li>
						<a href='http://google.com/'>Contacto</a>
					</li>
				</ul>
			</Container>
		</StyledNavbar>
	);
};

export default Navbar;
