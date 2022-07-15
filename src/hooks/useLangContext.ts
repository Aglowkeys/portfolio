import { useContext } from "react"
import { LanguageContext } from "../LangContext"
import { UseLangContextValue } from "../types/context";

export const useLangContext = (): UseLangContextValue => {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error('useLangContext must be used inside a LanguageProvider')
  }

  const { lang, setLang } = value;

  return [lang, setLang];
}