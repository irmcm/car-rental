import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../components/Map';
import '../styles/homepage.css';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n'; 

const offices = {
    tr: [
        { name: 'Ýzmir Alsancak Þehir', address: 'Ýsmet Kaptan Mh. Gaziosmanpaþa Bulvarý No:7, Ýzmir', phone: '0232 441 41 17' },
        { name: 'Ýzmir Adnan Menderes Havalimaný', address: 'Gaziemir, Ýzmir Adnan Menderes Havalimaný Dýþ Hatlar Terminali', phone: '0232 274 24 24' },
        { name: 'Ýzmir Bornova Þubesi', address: 'Kazýmdirik Mah. Ankara Cad. No: 246, Bornova/Ýzmir', phone: '0232 374 00 74' }
    ],
    en: [
        { name: 'Izmir Alsancak City', address: 'Ismet Kaptan Mh. Gaziosmanpasa Bulvari No:7, Izmir', phone: '+90 232 441 41 17' },
        { name: 'Izmir Adnan Menderes Airport', address: 'Gaziemir, Izmir Adnan Menderes Airport Intl. Terminal', phone: '+90 232 274 24 24' },
        { name: 'Izmir Bornova Branch', address: 'Kazimdirik Mah. Ankara St. No: 246, Bornova/Izmir', phone: '+90 232 374 00 74' }
    ]
};

const HomePage = () => {
    const { t } = useTranslation();
    const [language, setLanguage] = useState('tr');
    const [pickupOffice, setPickupOffice] = useState('');
    const [dropoffOffice, setDropoffOffice] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [dropoffDate, setDropoffDate] = useState('');
    const navigate = useNavigate();

    const toggleLanguage = () => {
        setLanguage(language === 'tr' ? 'en' : 'tr');
    };

    const handleRentCar = () => {
        if (!pickupOffice || !dropoffOffice || !pickupDate || !dropoffDate) {
            alert('Lütfen tüm alanlarý doldurun.');
            return;
        }

        navigate('/search-results', {
            state: {
                pickupOffice,
                dropoffOffice,
                pickupDate,
                dropoffDate,
                language
            }
        });
    };

    return (
        <div className="homepage full-width-container">
            <div className="navbar">
                <h1>Car Rental</h1>
                <div className="nav-icons">
                    <button className="language-button" onClick={toggleLanguage}>
                        {language === 'tr' ? 'EN' : 'TR'}
                    </button>
                    <button className="login-button" onClick={() => navigate('/login')}>
                        {language === 'tr' ? 'Giriþ Yap' : 'Login'}
                    </button>
                </div>
            </div>

            <div className="rental-navbar">
                <select
                    value={pickupOffice}
                    onChange={(e) => setPickupOffice(e.target.value)}
                >
                    <option value="" disabled>{t('pickupPlaceholder')}</option>
                    {offices[language].map((office, index) => (
                        <option key={index} value={office.name}>{office.name}</option>
                    ))}
                </select>

                <select
                    value={dropoffOffice}
                    onChange={(e) => setDropoffOffice(e.target.value)}
                >
                    <option value="" disabled>{t('dropoffPlaceholder')}</option>
                    {offices[language].map((office, index) => (
                        <option key={index} value={office.name}>{office.name}</option>
                    ))}
                </select>

                <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                />
                <input
                    type="date"
                    value={dropoffDate}
                    onChange={(e) => setDropoffDate(e.target.value)}
                />
                <button onClick={handleRentCar}>
                    {language === 'tr' ? 'Araç Kirala' : 'Rent a Car'}
                </button>
            </div>

            <div className="content-container">
                <div className="office-info">
                    <h2>{language === 'tr' ? 'Avis Ofisleri' : 'Avis Offices'}</h2>
                    {offices[language].filter(office => office.name === pickupOffice).map((office, index) => (
                        <div key={index}>
                            <strong>{office.name}</strong>
                            <p>{office.address}</p>
                            <p>{office.phone}</p>
                        </div>
                    ))}
                </div>
                <div className="map-container">
                    <Map selectedOffice={pickupOffice} />
                </div>
            </div>
        </div>
    );
};

export default HomePage;