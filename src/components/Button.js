import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: var(--primary-200);
	color: var(--light);
	text-transform: uppercase;
	font: inherit;
	font-size: var(--body-sm);
	font-weight: 800;
	border: 0;
	padding: 0.75em 1.4em;
	min-width: 8em;
	box-shadow: 5px 5px 0px var(--primary-300);
	transition: transform 0.2s ease, box-shadow 0.2s ease;

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
		outline: 4px dotted var(--primary-300);
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

	&[disabled],
	&[disabled]:focus,
	&[disabled]:hover,
	&[disabled]:active {
		background-image: none;
		background-color: #ccc;
		color: var(--dark);
		box-shadow: 5px 5px 0px #666;
		transition: none;
		transform: none;
	}
`;

const Button = ({ children, alternative = '', disabled = false }) => {
	return (
		<StyledButton className={alternative} disabled={disabled}>
			{children}
		</StyledButton>
	);
};

export default Button;
