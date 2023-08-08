// src/App.js
import React from 'react';
import './App.css'; // You can include your CSS styles here
import PlaceOrderScreen from './components/PlaceOrderScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Place Order App</h1>
      </header>
      <main className="App-main">
        <PlaceOrderScreen />
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} Place Order App</p>
      </footer>
    </div>
  );
}

export default App;
