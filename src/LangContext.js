import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = (props) => {
	const [Lang, setLang] = useState(localStorage.getItem('siteLanguage'));
	if (!Lang) {
		localStorage.setItem('siteLanguage', 'es');
		setLang('es');
	}

	return (
		<LanguageContext.Provider value={{ Lang, setLang }}>
			{props.children}
		</LanguageContext.Provider>
	);
};

export default LanguageProvider;
