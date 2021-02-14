import React from 'react';
import styled from 'styled-components';

const StyledH2 = styled.h2`
	text-align: center;
	font-size: var(--h-md);
	letter-spacing: -0.03em;
	line-height: 1;

	&::after {
		content: '';
		display: block;
		height: 0.2em;
		width: 1.5em;
		background-color: currentColor;
		margin: 0.25em auto 0.5em;
	}

	&.alternative {
		text-align: left;
	}

	&.alternative::after {
		margin: 0.25em 0 0.5em;
	}
`;

const H2 = ({ children, alternative = '' }) => {
	return <StyledH2 className={alternative}>{children}</StyledH2>;
};

export default H2;