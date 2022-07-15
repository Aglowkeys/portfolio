import type { Dispatch, SetStateAction } from 'react';
import type { Language } from '.';

export type ContextValue = {
  lang: Language;
  setLang: Dispatch<SetStateAction<Language>>;
};

export type UseLangContextValue = [Language, Dispatch<SetStateAction<Language>>];
