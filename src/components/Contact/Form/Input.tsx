import type { ChangeEvent, FocusEvent, FunctionComponent, HTMLInputTypeAttribute } from 'react'; 
import { useState } from 'react';
import { useLangContext } from '../../../hooks/useLangContext';
import { strings } from '../strings';
import { isValidInput } from '../utils';
import Exclamation from '../../Exclamation';

type ValidIds = 'Name' | 'Email';

type Props = {
  id: ValidIds;
  type?: HTMLInputTypeAttribute;
}

const Input: FunctionComponent<Props> = ({ id, type = 'text' }) => {
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');
  const [lang] = useLangContext();
  const s = strings[lang];
  const isInvalid = !!(touched && error);

  const validateInput = (value: string) => {
    if (!value.length) {
      setError(s[`error${id}Incomplete`])
      return;
    }

    if (!isValidInput(type, value)) {
      setError(s[`error${id}Invalid`])
      return;
    }

    setError('')
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!touched) {
      setTouched(true);
    }
  
    validateInput(e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!touched) {
      return;
    }

    validateInput(e.target.value);
  }

  return (
      <div className='input__container'>
          <label htmlFor={id}>{s[`label${id}`]}</label>
          <input
              id={id}
              type={type}
              name={id}
              placeholder={s[`placeholder${id}`]}
              onBlur={handleBlur}
              onChange={handleChange}
              required
              aria-required
              autoComplete='off'
              aria-invalid={isInvalid}
              aria-describedby={isInvalid ? `error-${id}` : undefined}
          />

          {isInvalid && (
            <div className='input__error' id={`error-${id}`}>
                <Exclamation />
                <p>{error}</p>
            </div>
          )}
      </div>
  );
};

export default Input;
