// src/components/WeatherInput.jsx

import React, { useState, useEffect } from 'react';
import { Input, Typography, Alert, Card } from 'antd'; 
import weatherData from '../weatherData.json';
import WeatherCard from './WeatherCard';

const { Title, Text } = Typography;
const { Search } = Input;

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

export default function WeatherInput() {
    const [searchTerm, setSearchTerm] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    useEffect(() => {
        if (debouncedSearchTerm) {
            const normalizedCity = debouncedSearchTerm.trim().toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
            
            if (weatherData.hasOwnProperty(normalizedCity)) {
                setWeather(weatherData[normalizedCity]);
                setError('');
            } else {
                setWeather(null);
                setError(`Город "${normalizedCity}" не найден в базе данных.`);
            }
        } else {
            setWeather(null);
            setError('');
        }
    }, [debouncedSearchTerm]);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            
            backgroundImage: "url('https://cdn-icons-gif.flaticon.com/14822/14822094.gif')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: '20px',
        }}>
            
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                padding: '40px',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                maxWidth: '500px',
                width: '100%',
                textAlign: 'center'
            }}>
                <Title level={2} style={{ color: '#000' }}>Погода вашем Городе 🌦️</Title>
                
                <Search
                    placeholder="Введите ваш Город"
                    allowClear
                    enterButton="Поиск🔍"
                    size="large"
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ marginBottom: '20px' }}
                />
                
                {error && (
                    <Alert
                        message=" Вышло Ошибка😢"
                        description={error}
                        type="error"
                        showIcon
                        style={{ marginBottom: '20px' }}
                    />
                )}
                
                <WeatherCard city={searchTerm} data={weather} />
                
            </div>

            <Card style={{ marginTop: 20, width: 450 }}>
                 <Title level={4}>Попробуйте ввести один из городов 😊:</Title>
                 <Text>London, Paris, Tokyo, Toronto</Text>
            </Card>
            
        </div>
    );
}