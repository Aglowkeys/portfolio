import type { HTMLInputTypeAttribute } from "react";

export const isValidName = (value: string) => (
  /^[a-z'\-,. ]{2,}$/i.test(value)
);

export const isValidEmail = (value: string) => (
  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
);

export const isValidInput = (type: HTMLInputTypeAttribute, value: string) => {
  switch (type) {
    case 'text':
      return isValidName(value);
    
    case 'email':
      return isValidEmail(value);

    default:
      return false;
  }
};
