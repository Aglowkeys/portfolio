import { StyledLink } from './styles';

const ButtonLink = ({
	children,
	alternative = null,
	disabled = false,
	link = '#',
	blank = true,
	ariaLabel = null,
}) => {
	return (
		<StyledLink
			className={alternative}
			href={link}
			target={blank ? '_blank' : '_self'}
			rel='noopener noreferrer'
			aria-label={ariaLabel}
		>
			{children}
		</StyledLink>
	);
};

export default ButtonLink;
