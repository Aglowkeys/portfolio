import React, { useContext } from 'react';
import { LanguageContext } from '../LangContext';

import styled from 'styled-components';
import myphoto from '../assets/fotomia.jpg';

const MyPhoto = styled.img`
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
	object-position: top;
	position: absolute;
	right: 0;
	bottom: -7em;
	z-index: 5;

	@media (max-width: 1000px) {
		bottom: -7em;
		max-width: 55%;
	}

	@media (max-width: 600px) {
		display: none;
	}
`;

const Me = () => {
	const { Lang } = useContext(LanguageContext);
	return (
		<MyPhoto
			src={myphoto}
			alt={
				Lang === 'es'
					? 'Foto de Emiliano Alfonso'
					: 'Photo of Emiliano Alfonso'
			}
		/>
	);
};

export default Me;
