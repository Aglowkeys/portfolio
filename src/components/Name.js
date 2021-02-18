import styled from 'styled-components';

const StyledName = styled.h1`
	font-size: var(--h-lg);
	color: var(--primary-200);
	line-height: 1;
	letter-spacing: -0.075em;
	padding-right: 0.1em; // Porque la font se me corta, creo que por cómo está hecha

	@media (max-width: 1000px) {
		font-size: var(--h-md);
	}
	@supports (background-clip: text) or (-webkit-background-clip: text) {
		color: transparent;
		background-image: linear-gradient(
			90deg,
			var(--primary-200),
			var(--secondary)
		);
		background-clip: text;
		-webkit-background-clip: text;
	}

	// Para evitar bugs en Safari
	/* 	@supports (font-size: clamp(2.5rem, 10vw, var(--h-lg))) {
		font-size: clamp(2.5rem, 10vw, var(--h-lg));
	}
 */
	span {
		display: block;
	}
`;

const Name = () => {
	return (
		<StyledName>
			Emiliano <span>Alfonso</span>
		</StyledName>
	);
};

export default Name;
