import { ContactStrings } from '../../types/strings';

export const strings: ContactStrings = {
  // TODO: Tipar estas props para que las keys con "Email" / "Name" usen el tipo ValidIds declarado en Input.tsx
  // Cambiar la estructura del objeto a algo como en.labels.name, es.errors.name.incomplete
  en: {
    title: "Let's chat",
    sectionLabel: 'Contact me',
    description: 'Do not hesitate to contact me in case you need anything! My social links and email are listed below.',
    labelName: 'Name (required):',
    labelEmail: 'E-mail (required):',
    labelMessage: 'Message (required):',
    placeholderName: 'Name',
    placeholderEmail: 'E-mail',
    placeholderMessage: 'Message',
    send: 'Send message',
    sending: 'Sending...',
    sendSuccess: 'Message sent! I will get in touch with you as soon as possible.',
    sendError: 'There was an error trying to send your message. Please try again.',
    errorNameIncomplete: 'Please enter your name.',
    errorNameShort: 'Your name must be at least 2 characters long.',
    errorNameInvalid: "The provided name is invalid. It may only contain letters and the following characters: - , . '",
    errorMessage: 'Please enter a message.',
    errorEmailIncomplete: 'Please enter an e-mail address.',
    errorEmailInvalid: 'The provided e-mail is invalid.',
  },
  es: {
    title: 'Hablemos',
    sectionLabel: 'Contáctame',
    description: '¡No dudes en contactarme por cualquier consulta! Los enlaces a mis redes y mi email están abajo.',
    labelName: 'Nombre (requerido):',
    labelEmail: 'Correo electrónico (requerido):',
    labelMessage: 'Mensaje (requerido):',
    placeholderName: 'Nombre',
    placeholderEmail: 'Correo electrónico',
    placeholderMessage: 'Mensaje',
    send: 'Enviar mensaje',
    sending: 'Enviando...',
    sendSuccess: '¡Tu mensaje fue enviado! Me contactaré contigo a la brevedad.',
    sendError: 'Ocurrió un error al enviar tu mensaje. Por favor, inténtalo nuevamente.',
    errorNameIncomplete: 'Por favor, ingresa tu nombre.',
    errorNameShort: 'Tu nombre debe tener al menos 2 caracteres de largo.',
    errorNameInvalid: "El nombre ingresado es inválido. Solo se permiten letras y los siguientes símbolos: - , . '",
    errorMessage: 'Por favor, escribe un mensaje.',
    errorEmailIncomplete: 'Por favor, ingresa una dirección de correo electrónico.',
    errorEmailInvalid: 'El correo electrónico ingresado es inválido.',
  },
};