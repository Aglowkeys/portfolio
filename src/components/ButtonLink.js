import styled from 'styled-components';

const StyledLink = styled.a`
	background-color: var(--primary-200);
	border: 0;
	box-shadow: 5px 5px 0px var(--primary-300);
	color: var(--light);
	cursor: default;
	display: inline-block;
	font: inherit;
	font-size: var(--body-sm);
	font-weight: 800;
	min-width: 8em;
	padding: 0.75em 1.4em;
	text-align: center;
	text-decoration: none;
	text-transform: uppercase;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	user-select: none;

	&:hover,
	&:focus {
		background-color: transparent;
		background-image: linear-gradient(
			90deg,
			var(--primary-200),
			var(--secondary)
		);
	}

	&:focus {
		outline: 4px dotted var(--primary-100);
		outline-offset: 0.5em;
	}

	&:active {
		transform: translate(5px, 5px);
		box-shadow: none;
	}

	&.alternative {
		background-color: var(--light);
		color: var(--primary-200);

		&:hover,
		&:focus {
			background-image: none;
			background-color: var(--primary-100);
			color: var(--dark);
		}
	}
`;

const ButtonLink = ({
	children,
	alternative = '',
	disabled = false,
	link = '#',
}) => {
	return (
		<StyledLink
			className={alternative}
			href={link}
			target='_blank'
			rel='noopener noreferrer'
		>
			{children}
		</StyledLink>
	);
};

export default ButtonLink;
