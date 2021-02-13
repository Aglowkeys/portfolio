import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 80%;
	max-width: 75rem;
	margin: 0 auto;
`;

const Container = ({ children }) => {
	return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
