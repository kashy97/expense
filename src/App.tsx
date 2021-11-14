import React from 'react';
import Transaction from './components/trans';
import Calc from './components/Ecalc';
import './App.css';

function App() {
  return (
    <div className="container">
        <h1>Expense Tracker</h1>
        <Calc/><br/>
        <Transaction/>
    </div>
  );
}

export default App;
