import {
  createContext,
  useState,
  type FunctionComponent,
  type ReactNode,
} from 'react';
import type { ContextValue } from '../types/context';
import type { Language } from '../types';

export const LanguageContext = createContext<ContextValue | null>(null);

const getLangFromLocalStorage = () => localStorage.getItem('siteLanguage') as Language | null || 'es';

export const LanguageProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(getLangFromLocalStorage);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
