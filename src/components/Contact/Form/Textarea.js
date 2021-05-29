import { useField } from 'formik';
import Exclamation from '../../Exclamation';

const Textarea = ({ label, ...props }) => {
	const [field, meta] = useField(props);

	return (
		<div className='textarea__container'>
			<label htmlFor={props.id || props.name}>{label}</label>
			<textarea
				{...field}
				{...props}
				required={true}
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

export default Textarea;
