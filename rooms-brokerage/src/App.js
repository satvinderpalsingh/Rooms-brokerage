import React from 'react';
import User from './Components/UserDashboard/user';
import './App.css';
import Home from './Components/Home/Homepage/Home';
import Header from './Components/Utility/Header/header';
import Footer from './Components/Utility/Footer/footer';
import Authentication from './Components/authentication/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Components/Home/index';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <User />
        <Authentication />
        <Homepage/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
