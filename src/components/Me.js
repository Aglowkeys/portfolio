import styled from 'styled-components';
import myphoto from '../assets/FotoMia.png';

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
		width: 60%;
	}

	@media (max-width: 600px) {
		display: none;
	}
`;

const Me = () => <MyPhoto src={myphoto} alt='Photo of Emiliano' />;

export default Me;
