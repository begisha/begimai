// src/components/WeatherCard.jsx

import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

export default function WeatherCard({ city, data }) {
    if (!data) return null; 

    return (
        <Card 
            title={<Title level={3} style={{ marginBottom: 0 }}>Погода в {city}</Title>}
            bordered={false}
            style={{ 
                width: 300, 
                marginTop: 20, 
                textAlign: 'center',
                backgroundColor: '#e6f7ff',
                borderRadius: '8px'
            }}
        >
            <Text style={{ fontSize: '72px', display: 'block' }}>{data.icon}</Text>
            <Title level={1} style={{ margin: '8px 0' }}>{data.temp}°C</Title>
            <Text strong>{data.description}</Text>
        </Card>
    );
}