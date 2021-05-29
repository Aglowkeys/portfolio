import { StyledButton } from './styles';

const Button = ({ children, type = null, alternative = null, disabled = false }) => {
	return (
		<StyledButton className={alternative} disabled={disabled} type={type}>
			{children}
		</StyledButton>
	);
};

export default Button;
