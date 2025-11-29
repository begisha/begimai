// src/components/UserList.jsx

import React from "react";
import UserCard from "./UserCard"; 
import { Row, Typography } from "antd";

const { Title } = Typography;

const users = [
 {
 name: "Аяна Эмилбековна",
 age: 25,
 city: "Москва",
 active: true,
img: "user.jpg",
},
 {
 name: "Мээримай Эмилбековна",
 age: 30,
city: "Санкт-Петербург",
 active: false,
 img: "user.jpg",
},
{
name: "Мария Эмилбековна",
age: 22,
city: "Казань",
active: true,
img: "user.jpg",
},
    {
name: "Пери Эмилбековна",
 age: 41,
city: "Новосибирск",
active: false,
img: "user.jpg",
 },
];

export default function UserList() {
    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
            <Title level={2} style={{ textAlign: 'center', marginBottom: '30px' }}>
                Карточки Пользователей
            </Title>
            {/* Используем Row для организации карточек */}
            <Row gutter={[16, 16]} justify="center">
                {users.map((user, index) => (
                    <div key={index}>
                        <UserCard user={user} />
                    </div>
                ))}
            </Row>
        </div>
    );
}