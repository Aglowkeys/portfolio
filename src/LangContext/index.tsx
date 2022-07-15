import type { ContextValue } from '../types/context';
import type { Language } from '../types';
import { createContext, useState, type FunctionComponent, type ReactNode } from 'react';

export const LanguageContext = createContext<ContextValue | null>(null);

const getLangFromLocalStorage = () => localStorage.getItem('siteLanguage') as Language | null || 'es';

export const LanguageProvider: FunctionComponent<{ children: ReactNode }> = (props) => {
  const [lang, setLang] = useState<Language>(getLangFromLocalStorage);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
