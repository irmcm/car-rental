import React, { createContext, useState, useEffect } from 'react';
import i18n from '../i18n/i18n';

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem('language') || 'tr');

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [language]);

    const toggleLanguage = () => {
        const newLanguage = language === 'tr' ? 'en' : 'tr';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;