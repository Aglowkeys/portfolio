import type { FunctionComponent } from 'react';
import { StyledHeader } from './styles';
import Hero from '../Hero';
import Navbar from '../Navbar';

const Header: FunctionComponent = () => {
	return (
		<StyledHeader>
			<Navbar />
			<Hero />
		</StyledHeader>
	);
};

export default Header;
