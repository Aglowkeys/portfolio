export type Language = 'es' | 'en';

export type String = Record<Language, Record<string, string>>;

export type PortfolioProjectStrings = {
  description: string;
  ariaWebsite: string;
  ariaRepository: string;
}