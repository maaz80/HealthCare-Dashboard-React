// src/App.js
import React from 'react';
import Form from './components/Form';
import './index.css';
import NavBar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-200 poppins-regular">
      <NavBar/>
      <Form />
    </div>
  );
}

export default App;
