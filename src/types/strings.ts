import type { Language } from '.';

export type AboutMeStrings = Record<Language, {
  aboutMe: string;
  description: string;
  seeProjects: string;
}>;

export type ArrowTopStrings = Record<Language, {
  goTop: string;
}>;

export type ContactStrings = Record<Language, {
  title: string;
  sectionLabel: string;
  description: string;
  labelName: string;
  labelEmail: string;
  labelMessage: string;
  placeholderName: string;
  placeholderEmail: string;
  placeholderMessage: string;
  send: string;
  sending: string;
  sendSuccess: string;
  sendError: string;
  errorNameIncomplete: string;
  errorNameShort: string;
  errorNameInvalid: string;
  errorMessage: string;
  errorEmailIncomplete: string;
  errorEmailInvalid: string;
}>;

export type FooterStrings = Record<Language, {
  social: string;
}>;

export type HeroStrings = Record<Language, {
  description: string;
  downloadCV: string;
  cvLink: string;
}>;

export type NavbarStrings = Record<Language, {
  skills: string;
  portfolio: string;
  contact: string;
  lang: 'EN' | 'ES';
  ariaLabel: string;
  skipContent: string;
}>;

type ProjectStrings = {
  description: string;
  ariaWebsite: string;
  ariaRepository: string;
}

export type ProjectsStrings = Record<Language, {
  description: string;
  buttonRepository: string;
  buttonWebsite: string;
  buttonApp: string;
  gamingHub: ProjectStrings;
  quizMeApp: ProjectStrings;
  movye: ProjectStrings;
  whiteboard: ProjectStrings;
  weatherApp: ProjectStrings;
}>;

export type SkillsStrings = Record<Language, {
  title: string;
  description: string;
}>;
