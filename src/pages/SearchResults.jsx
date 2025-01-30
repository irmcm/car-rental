import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
import '../styles/searchresults.css';
import i18n from '../i18n/i18n';
import renaultClioImg from '../assests/renault-clio-hatchback.png';
import fiatEgeaImg from '../assests/fiat-egea.png';
import audiA3Img from '../assests/audi-a3.png';
import vwTRocImg from '../assests/volkswagen-t-roc.png';
import peugeot301Img from '../assests/peugeot-301.png';
import peugeotExpertImg from '../assests/peugeot-expert.png';


const cars = [
    {
        id: 1,
        name: 'Peugeot Expert Traveller',
        category: 'minibus',
        transmission: 'automatic',
        fuel: 'diesel',
        bodyType: 'Minibüs',
        deposit: '6,000 TL',
        mileage: '500 km',
        ageLimit: '27 (license: 3 years)',
        dailyPrice: 3559.00,
        img: peugeotExpertImg 
    },
    {
        id: 2,
        name: 'Renault Clio',
        category: 'economic',
        transmission: 'automatic',
        fuel: 'petrol',
        bodyType: 'Hatchback 5 Kapý',
        deposit: '4,500 TL',
        mileage: '500 km',
        ageLimit: '21 (license: 1 year)',
        dailyPrice: 1234.00,
        img: renaultClioImg
    },
    {
        id: 3,
        name: 'Peugeot 301',
        category: 'economic',
        transmission: 'manual',
        fuel: 'petrol',
        bodyType: 'Sedan',
        deposit: '3,000 TL',
        mileage: '500 km',
        ageLimit: '21 (license: 2 years)',
        dailyPrice: 933.00,
        img: peugeot301Img
    },
    {
        id: 4,
        name: 'Audi A3',
        category: 'luxury',
        transmission: 'automatic',
        fuel: 'petrol',
        bodyType: 'Sedan',
        deposit: '4,000 TL',
        mileage: '400 km',
        ageLimit: '26 (license: 4 years)',
        dailyPrice: 1950.00,
        img: audiA3Img
    },
    {
        id: 5,
        name: 'Volkswagen T-Roc',
        category: 'suv',
        transmission: 'automatic',
        fuel: 'petrol',
        bodyType: 'SUV/Jeep',
        deposit: '3,500 TL',
        mileage: '400 km',
        ageLimit: '24 (license: 3 years)',
        dailyPrice: 1288.00,
        img: vwTRocImg
    },
    {
        id: 6,
        name: 'Fiat Egea',
        category: 'economic',
        transmission: 'automatic',
        fuel: 'petrol',
        bodyType: 'Sedan',
        deposit: '2,500 TL',
        mileage: '1500 km',
        ageLimit: '21',
        dailyPrice: 1963.07,
        img: fiatEgeaImg
    }
];

const SearchResults = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const { pickupOffice, dropoffOffice, pickupDate, dropoffDate } = location.state;

    const [filteredCars, setFilteredCars] = useState(cars);
    const [vehicleType, setVehicleType] = useState('all');
    const [sortOrder, setSortOrder] = useState('priceAsc');
    const [transmissionType, setTransmissionType] = useState('all');

    useEffect(() => {
        if (location.state.language) {
            i18n.changeLanguage(location.state.language);
        }
    }, [location.state.language]);

    useEffect(() => {
        let updatedCars = [...cars];

        if (vehicleType !== 'all') {
            updatedCars = updatedCars.filter(car => car.category === vehicleType);
        }

        if (transmissionType !== 'all') {
            updatedCars = updatedCars.filter(
                car => car.transmission.toLowerCase() === transmissionType.toLowerCase()
            );
        }

        if (sortOrder === 'priceAsc') {
            updatedCars.sort((a, b) => a.dailyPrice - b.dailyPrice);
        } else {
            updatedCars.sort((a, b) => b.dailyPrice - a.dailyPrice);
        }

        setFilteredCars(updatedCars);
    }, [vehicleType, sortOrder, transmissionType]);

    return (
        <div className="search-results">
            <div className="search-header">
                <div className="date-info">
                    <h3>{pickupDate} - {dropoffDate}</h3>
                    <p>{pickupOffice} - {dropoffOffice}</p>
                </div>
                <div className="filter-options">
                    <select className="filter-select" onChange={(e) => setVehicleType(e.target.value)}>
                        <option value="all">{t('vehicleType')}: {t('allCars')}</option>
                        <option value="economic">{t('economic')}</option>
                        <option value="luxury">{t('luxury')}</option>
                        <option value="suv">{t('suv')}</option>
                        <option value="minibus">{t('minibus')}</option>
                    </select>
                    <select className="filter-select" onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="priceAsc">{t('orderBy')}: {t('lowestPrice')}</option>
                        <option value="priceDesc">{t('orderBy')}: {t('highestPrice')}</option>
                    </select>
                    <select className="filter-select" onChange={(e) => setTransmissionType(e.target.value)}>
                        <option value="all">{t('transmissionType')}: {t('all')}</option>
                        <option value="manual">{t('manual')}</option>
                        <option value="automatic">{t('automatic')}</option>
                    </select>
                </div>
            </div>

            <div className="car-list">
                {filteredCars.map((car) => (
                    <div key={car.id} className="car-card">
                        <img src={car.img} alt={car.name} className="car-image" />
                        <div className="car-info">
                            <h3>{car.name}</h3>
                            <p>{t('bodyType')}: <strong>{car.bodyType}</strong></p>
                            <p>{t('fuel')}: <strong>{car.fuel}</strong></p>
                            <p>{t('transmission')}: <strong>{car.transmission}</strong></p>
                            <p>{t('deposit')}: <strong>{car.deposit}</strong></p>
                            <p>{t('dailyPrice')}: <strong>{car.dailyPrice.toLocaleString()} TL</strong></p>
                        </div>
                        <div className="rent-now">
                            <button
                                className="pay-now-button"
                                onClick={() => {
                                    alert(t('paymentSuccess'));
                                    navigate('/');
                                }}
                            >
                                {t('payNow')}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchResults;