import type { FunctionComponent, ReactNode } from 'react';
import { StyledButton } from './styles';

type Props = {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
};

const Button: FunctionComponent<Props> = ({ children, disabled = false, ...rest }) => (
  <StyledButton disabled={disabled} {...rest}>
    {children}
  </StyledButton>
);

export default Button;
