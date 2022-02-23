import { StyledH2 } from './styles';

const H2 = ({ children, alternative = null, ...rest }) => {
    return (
        <StyledH2 {...rest} className={alternative}>
            {children}
        </StyledH2>
    );
};

export default H2;
