import React, { useRef, useState, useContext } from 'react';
import { StyledContact } from './styles';
import { LanguageContext } from '../../LangContext';
import { strings } from './strings';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import emailjs, { init } from '@emailjs/browser';

import Input from './Form/Input';
import Textarea from './Form/Textarea';
import H2 from '../H2';
import Container from '../Container';
import Button from '../Button';
import Exclamation from '../Exclamation';
import Success from '../Success';
import Spinner from '../Spinner';

const Contact = () => {
    const { REACT_APP_SERVICE, REACT_APP_TEMPLATE, REACT_APP_USER } = process.env;
    init(REACT_APP_USER);

    const { Lang } = useContext(LanguageContext);
    const s = strings[Lang];
    const formRef = useRef(null);
    const [sent, setSent] = useState(false);
    const [sendError, setSendError] = useState(false);

    const validationSchema = Yup.object({
        name: Yup.string()
            .min(2, s.errorNameShort)
            .required(s.errorNameIncomplete)
            .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i, s.errorNameInvalid),
        message: Yup.string().required(s.errorMessage),
        email: Yup.string().email(s.errorEmailInvalid).required(s.errorEmailIncomplete),
    });

    const handleSubmit = (values, { setSubmitting, resetForm }) => {
        emailjs
            .sendForm(REACT_APP_SERVICE, REACT_APP_TEMPLATE, formRef.current)
            .then(() => {
                setSendError(false);
                setSent(true);
                setSubmitting(false);
                resetForm({
                    values: {
                        name: '',
                        email: '',
                        message: '',
                    },
                });
            })
            .catch(() => {
                setSendError(true);
                setSent(false);
                setSubmitting(false);
            });
    };

    return (
        <StyledContact id='contact'>
            <Container>
                <H2>{s.title}</H2>
                <p>{s.description}</p>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        message: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {(formik) => (
                        <Form ref={formRef}>
                            <div>
                                <Input
                                    id='name'
                                    label={s.labelName}
                                    name='name'
                                    type='text'
                                    placeholder={s.placeholderName}
                                />
                                <Input
                                    id='email'
                                    label={s.labelEmail}
                                    name='email'
                                    type='email'
                                    placeholder={s.placeholderEmail}
                                />
                            </div>
                            <Textarea
                                id='message'
                                label={s.labelMessage}
                                name='message'
                                placeholder={s.placeholderMessage}
                            />

                            <Button
                                alternative='alternative'
                                type='submit'
                                disabled={formik.isSubmitting}
                            >
                                {formik.isSubmitting ? s.sending : s.send}
                                {formik.isSubmitting && <Spinner />}
                            </Button>

                            <div className='send__message' aria-live='polite'>
                                {sent && (
                                    <>
                                        <div className='svg-container'>
                                            <Success />
                                        </div>
                                        {s.sendSuccess}
                                    </>
                                )}
                                {sendError && (
                                    <>
                                        <div className='svg-container'>
                                            <Exclamation />
                                        </div>
                                        {s.sendError}
                                    </>
                                )}
                            </div>
                        </Form>
                    )}
                </Formik>
            </Container>
        </StyledContact>
    );
};

export default Contact;
