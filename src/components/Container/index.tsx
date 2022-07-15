import type { FunctionComponent, ReactNode } from 'react';
import { StyledContainer } from './styles';

const Container: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
