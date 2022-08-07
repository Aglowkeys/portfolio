import type { FunctionComponent, ReactNode } from 'react';
import { StyledH2 } from './styles';

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
}

const H2: FunctionComponent<Props> = ({ children, ...rest }) => (
  <StyledH2 {...rest}>
    {children}
  </StyledH2>
);

export default H2;
