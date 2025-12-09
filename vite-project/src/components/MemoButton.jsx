// src/components/MemoButton.jsx

import React from 'react';

const MemoButton = React.memo(({ onClick, label }) => {
    console.log(`[MemoButton] Рендеринг кнопки: ${label}`);

    return (
        <button 
            onClick={onClick} 
            style={{ padding: '10px 20px', margin: '10px', backgroundColor: '#ff06b4ff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
            {label}
        </button>
    );
});

export default MemoButton;