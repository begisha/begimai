// src/App.jsx

import React from 'react';
import Counter from './components/Counter.jsx'; 
import FilteredList from './components/FilteredList.jsx'; 

function App() {
  return (
    <div className="App" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>DZ№5</h1>
      
      <Counter />
      
      <FilteredList />
    </div>
  );
}

export default App;