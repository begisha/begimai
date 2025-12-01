// src/components/ProductCard.jsx

import React from 'react';
import { Card, Button, Typography } from 'antd'; 

const { Title, Text } = Typography;
const { Meta } = Card;

export default function ProductCard({ product, imageUrls }) {
    
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImage = imageUrls[randomIndex];

    const handleBuyNow = () => {
        console.log(`--- Куплен товар ---`);
        console.log(`ID товара: ${product.id}`);
        console.log(`Название: ${product.name}`);
        console.log(`---------------------`);
        alert(`Вы купили "${product.name}"! Проверьте консоль.`);
    };

    return (
        <Card
            style={{ width: 300, margin: '20px' }}
            hoverable
            cover={
                <img
                    alt={product.name}
                    src={`/${randomImage}`} 
                    style={{ height: 200, objectFit: 'cover' }}
                />
            }
            actions={[
                <Button 
                    key="buy" 
                    type="primary" 
                    danger
                    style={{ width: '90%' }} 
                    onClick={handleBuyNow}
                >
                    Buy now
                </Button>
            ]}
        >
            <Meta
                title={<Title level={4}>{product.name}</Title>}
                description={<Text strong style={{ color: '#c4b61aff' }}>Цена: $99.99</Text>}
            />
        </Card>
    );
}