import { useField } from 'formik';
import Exclamation from '../../Exclamation';

const Input = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    const { id } = props;
    const isInvalid = meta.touched && meta.error;

    return (
        <div className='input__container'>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input
                {...field}
                {...props}
                required
                aria-required
                autoComplete='off'
                aria-invalid={isInvalid}
                aria-describedby={isInvalid ? `error-${id}` : undefined}
            />
            {isInvalid ? (
                <div className='input__error' id={`error-${id}`}>
                    <div className='error__svg-container' aria-hidden='true'>
                        <Exclamation />
                    </div>
                    {meta.error}
                </div>
            ) : null}
        </div>
    );
};

export default Input;
