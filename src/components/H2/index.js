import { StyledH2 } from './styles';

const H2 = ({ children, alternative = null }) => {
	return <StyledH2 className={alternative}>{children}</StyledH2>;
};

export default H2;
