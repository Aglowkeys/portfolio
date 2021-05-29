import { StyledHeader } from './styles';
import Hero from '../Hero';
import Navbar from '../Navbar';

const Header = () => {
	return (
		<StyledHeader>
			<Navbar />
			<Hero />
		</StyledHeader>
	);
};

export default Header;
