import type { ChangeEvent, FocusEvent, FunctionComponent } from 'react';
import { useState } from 'react';
import { useLangContext } from '../../../hooks/useLangContext';
import Exclamation from '../../Exclamation';
import { strings } from '../strings';

const Textarea: FunctionComponent = () => {
  const [touched, setTouched] = useState(false);
  const [error, setError] = useState('');
  const [lang] = useLangContext();
  const { errorMessage, labelMessage, placeholderMessage } = strings[lang];
  const isInvalid = !!(touched && error);

  const validateTextarea = (value: string) => {
    if (!value.length) {
      setError(errorMessage);
      return;
    }

    setError('');
  };

  const handleBlur = (e: FocusEvent<HTMLTextAreaElement>) => {
    if (!touched) {
      setTouched(true);
    }

    validateTextarea(e.target.value);
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!touched) {
      return;
    }

    validateTextarea(e.target.value);
  };

  return (
    <div className="textarea__container">
      <label htmlFor="Message">{labelMessage}</label>
      <textarea
        id="Message"
        name="Message"
        placeholder={placeholderMessage}
        onBlur={handleBlur}
        onChange={handleChange}
        required
        aria-required
        autoComplete="off"
        aria-invalid={isInvalid}
        aria-describedby={isInvalid ? 'error-message' : undefined}
      />

      {isInvalid && (
        <div className="input__error" id="error-message">
          <Exclamation />
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default Textarea;
