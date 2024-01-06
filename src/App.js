import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Btn from './components/Home Page/Btn';
import Home from './components/Home Page/Home';
import Footer from './components/Footer';
import CurrencyMain from './components/Currency Page/CurrencyMain';
import { Route, Routes } from 'react-router';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/currency" element={<CurrencyMain />} />
    </Routes>
      <Footer />
    </div>
  );
}

export default App;
