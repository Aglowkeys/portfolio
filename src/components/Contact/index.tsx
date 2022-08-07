import {
  useRef,
  useState,
  type FormEvent,
  type FunctionComponent,
} from 'react';
import emailjs, { init } from '@emailjs/browser';
import { StyledContact } from './styles';
import { strings } from './strings';
import { useLangContext } from '../../hooks/useLangContext';
import H2 from '../H2';
import Container from '../Container';
import Button from '../Button';
import Exclamation from '../Exclamation';
import Success from '../Success';
import Spinner from '../Spinner';
import Input from './Form/Input';
import Textarea from './Form/Textarea';

export type Status = 'idle' | 'submitting' | 'error' | 'success';

const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_USER } = process.env;
init(REACT_APP_USER!);

const Contact: FunctionComponent = () => {
  const [lang] = useLangContext();
  const s = strings[lang];
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    emailjs
      .sendForm(REACT_APP_SERVICE!, REACT_APP_TEMPLATE!, formRef.current!)
      .then(() => {
        setStatus('success');
        formRef.current!.reset();
      })
      .catch(() => setStatus('error'));
  };

  return (
    <StyledContact aria-label={s.sectionLabel} id="contact">
      <Container>
        <H2>{s.title}</H2>
        <p>{s.description}</p>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div>
            <Input id="Name" />
            <Input id="Email" type="email" />
          </div>
          <Textarea />

          <Button
            className="alternative"
            type="submit"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? s.sending : s.send}
            {status === 'submitting' ? <Spinner /> : null}
          </Button>

          <div className="send__message" aria-live="polite">
            {status === 'success' && (
              <>
                <div className="svg-container">
                  <Success />
                </div>
                {s.sendSuccess}
              </>
            )}
            {status === 'error' && (
              <>
                <div className="svg-container">
                  <Exclamation />
                </div>
                {s.sendError}
              </>
            )}
          </div>
        </form>
      </Container>
    </StyledContact>
  );
};

export default Contact;
