import { useField } from 'formik';
import Exclamation from '../../Exclamation';

const Input = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className='input__container'>
			<label htmlFor={props.id || props.name}>{label}</label>
			<input
				{...field}
				{...props}
				required={true}
				autoComplete='off'
				aria-required={true}
				aria-invalid={meta.error ? true : false}
				aria-describedby={meta.error ? meta.error : null}
			/>
			{meta.touched && meta.error ? (
				<div className='input__error'>
					<div className='error__svg-container'>
						<Exclamation />
					</div>
					{meta.error}
				</div>
			) : null}
		</div>
	);
};

export default Input;
