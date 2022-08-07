import type { FunctionComponent, ReactNode } from 'react';
import { StyledLink } from './styles';

type Props = {
  children: ReactNode;
  className?: string;
  href: string;
  target?: '_blank' | 'self';
  ariaLabel?: string;
  disabled?: boolean;
}

const ButtonLink: FunctionComponent<Props> = ({ children, ariaLabel, ...rest }) => (
  <StyledLink
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    {...rest}
  >
    {children}
  </StyledLink>
);

export default ButtonLink;
