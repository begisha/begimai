// src/components/Counter.jsx

import React, { useState, useCallback } from 'react';
import MemoButton from './MemoButton'; 

export default function Counter() {
    const [count, setCount] = useState(0); 
    const [clicks, setClicks] = useState(0); 

    const handleClick = useCallback(() => {
        setClicks(prev => prev + 1);
        console.log('[Counter] Обработчик клика кнопки был вызван.');
    }, [clicks]);

    console.log(`[Counter] Рендеринг Counter. Текущий count: ${count}`);

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', marginBottom: '30px', borderRadius: '8px' }}>
            <h2>Задание 1: useCallback + React.memo</h2>
            
            <p style={{ fontSize: '20px' }}>Счетчик (Меняет родителя, но не MemoButton): <strong>{count}</strong></p>
            <button 
                onClick={() => setCount(count + 1)}
                style={{ padding: '10px 20px', backgroundColor: '#ff06b4ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
                Увеличить счетчик (Count)
            </button>
            
            <p>Количество кликов по MemoButton: {clicks}</p>

            <MemoButton 
                onClick={handleClick} 
                label="Кнопка с useCallback" 
            />
            
            
        </div>
    );
}