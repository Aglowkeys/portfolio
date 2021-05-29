import styled from 'styled-components';

export const StyledHeader = styled.header`
	min-height: 100vh;
	position: relative;
	display: flex;
	flex-direction: column;
	overflow: hidden;

	@media (max-width: 600px) {
		min-height: 80vh;
	}
`;
