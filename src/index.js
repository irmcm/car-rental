import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import './i18n/i18n'; 
import LanguageProvider from './context/LanguageContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LanguageProvider>
        <App />
    </LanguageProvider>
);