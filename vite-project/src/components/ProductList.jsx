// src/components/ProductList.jsx

import React from 'react';
import ProductCard from './ProductCard';
import { Row, Col, Typography } from 'antd';

const { Title } = Typography;

const products = [
    { id: 101, name: 'Anua  Гидрофильное масло для глубокого очищения пор, 200мл' },
    { id: 102, name: 'SKIN&LAB Glycoloic Acid Vitamin C Calming Jelly Serum Осветляющая слабокислотная сыворотка, 30мл' },
    { id: 103, name: 'BABOR Набор Soul&Body Gift Set Лосьон для тела, 250мл + гель для душа, 50мл' },
    { id: 104, name: 'CHANEL CHANCE EAU FRAICHE EDT, 150мл Alpha' },
    { id: 105, name: 'Athe AUTHENTIC AIRY LIP BALM бальзам для губ (01DRIZZLE) 3,3г' },
    { id: 106, name: 'A-Derma Protect Kids SPF50+ UVA+UVB солнцезащитный детский, 200мл' },
];

const imageUrls = [
    'anua1.jpg', 
    'skinlab.jpg',
    'babor.jpg',
    'chanel.jpg',
    'athe.jpg',
    'a-derma.jpg',

];

export default function ProductList() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
            <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>
                 CosmeShop
            </Title>
            
            <Row gutter={[16, 32]} justify="center">
                {products.map((product) => (
                    <Col
                        key={product.id}
                        xs={24} 
                        sm={12} 
                        lg={8} 
                    >
                        <ProductCard 
                            product={product} 
                            imageUrls={imageUrls} 
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}