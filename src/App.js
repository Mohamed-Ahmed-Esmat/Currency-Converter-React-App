import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Btn from './components/Home Page/Btn';
import Home from './components/Home Page/Home';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
