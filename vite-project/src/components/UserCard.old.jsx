// src/components/UserCard.jsx

import React from 'react';
import { Card, Avatar, Tag, Typography } from 'antd'; 
import { UserOutlined } from '@ant-design/icons'; 

const { Meta } = Card;
const { Text } = Typography; 

export default function UserCard({ user }) {
    
  
    const cardStyle = user.active
        ? { border: '3px solid #52c41a' } 
        : {};
        
    return (
        <Card
           
            style={{ width: 300, margin: "16px", borderRadius: "12px", ...cardStyle }}
            hoverable
        >
            <Meta
                   avatar={
                    <Avatar
                        size={64}
                        
                        src={`/${user.img}`} 
                        icon={<UserOutlined />} 
                    />
                }
                title={<Text strong style={{ fontSize: '18px' }}>{user.name}</Text>}
                description={
                    <div style={{ marginTop: 8 }}>
                        {/* 4. Данные */}
                        <p><Text strong>Возраст:</Text> {user.age}</p>
                        <p><Text strong>Город:</Text> {user.city}</p>
                        
                        {/* 5. Условный рендеринг Tag */}
                        <p>
                            <Text strong>Статус:</Text>{' '}
                            {user.active ? (
                                <Tag color="success">АКТИВЕН</Tag>
                            ) : (
                                <Tag color="default">Неактивен</Tag>
                            )}
                        </p>
                    </div>
                }
            />
        </Card>
    );
}