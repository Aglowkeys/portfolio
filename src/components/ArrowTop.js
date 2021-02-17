import React, { useState } from 'react';
import styled from 'styled-components';

const ArrowStyled = styled.button`
	border: 0;
	width: 3rem;
	height: 3rem;
	position: fixed;
	bottom: 2em;
	right: 2em;
	align-items: center;
	justify-content: center;
	z-index: 50;
	animation: fadeIn 0.3s;
	opacity: 1;
	transition: opacity 0.4s;
	background-color: var(--light);
	color: var(--primary-200);
	box-shadow: 5px 5px 0px var(--primary-300);
	padding: 0.3em;

	&:hover {
		background-color: var(--primary-100);
		color: var(--clr-dark);
	}

	&:focus {
		outline: 4px dotted var(--light);
		outline-offset: 0.5em;
	}

	svg {
		fill: currentColor;
	}

	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

const ArrowTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const scrollTop = () => {
		window.scrollTo({ top: 0, right: 0, behavior: 'smooth' });
		const nav = document.querySelector('nav');
		nav.focus();
	};

	window.addEventListener('scroll', checkScrollTop);

	return (
		<ArrowStyled
			onClick={scrollTop}
			tabIndex='0'
			style={{ display: showScroll ? 'flex' : 'none' }}
			aria-label='Volver arriba'
		>
			<svg
				fill='currentColor'
				viewBox='0 0 20 20'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
					clipRule='evenodd'
				></path>
			</svg>
		</ArrowStyled>
	);
};

export default ArrowTop;
