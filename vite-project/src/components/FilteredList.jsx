// src/components/FilteredList.jsx

import React, { useState, useMemo, useCallback } from 'react';

const initialUsers = [
  { id: 1, name: 'Begi' },
    { id: 2, name: 'Begim' },
    { id: 3, name: 'Begimaikaa' },
    { id: 4, name: 'Begisha' },
];

export default function FilteredList() {
    const [users, setUsers] = useState(initialUsers);
    const [filter, setFilter] = useState('');
    const [otherState, setOtherState] = useState(0); 

    const filteredUsers = useMemo(() => {
        console.log('[FilteredList] Выполняется тяжелая операция фильтрации...');
        
        return users.filter(user =>
            user.name.toLowerCase().includes(filter.toLowerCase())
        );
    }, [users, filter]); 

    const handleAddUser = useCallback(() => {
        const newUser = {
            id: users.length + 1,
            name: `Guest ${users.length + 1}`
        };
        setUsers(prevUsers => [...prevUsers, newUser]); 
        console.log('[FilteredList] Колбэк: Новый пользователь добавлен.');
    }, [users.length]); 

    console.log(`[FilteredList] Рендеринг FilteredList. Текущий OtherState: ${otherState}`);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Задание 2: useMemo и useCallback</h2>
            
            <input 
                type="text"
                placeholder="Фильтр по имени..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                style={{ padding: '8px', marginBottom: '15px', marginRight: '10px' }}
            />
            
            <button 
                onClick={handleAddUser}
                style={{ padding: '8px 15px', backgroundColor: '#ff06b4ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Добавить пользователя (useCallback)
            </button>

            <button 
                onClick={() => setOtherState(otherState + 1)}
                style={{ marginLeft: '10px', padding: '8px 15px', backgroundColor: '#ff06b4ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Изменить другое состояние (Проверка useMemo)
            </button>
            
            <h3>Список пользователей (Всего: {filteredUsers.length})</h3>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                {filteredUsers.map(user => (
                    <li key={user.id} style={{ padding: '5px 0', borderBottom: '1px dotted #eee' }}>{user.id}. {user.name}</li>
                ))}
            </ul>
            
            
        </div>
    );
}