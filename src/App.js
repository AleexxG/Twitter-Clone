import React from 'react';
import Navbar from './navbar/Navbar';
import Main from './main/Main';
import Recomm from './recomm/Recomm';
import './App.css';

function App() {
  return (
    <div className="app">

      <Navbar />

      <Main />

      <Recomm />

    </div>
  );
}

export default App;
