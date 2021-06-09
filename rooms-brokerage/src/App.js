import React from 'react';
import User from './Components/UserDashboard/user';
import './App.css';
import Home from './Components/Home/Homepage/Home';
import Header from './Components/Utility/Header/header';
import Footer from './Components/Utility/Footer/footer';
import Authentication from './Components/authentication/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './Components/Home/SearchPage/SearchPage';
import SearchPageB from './Components/Home/SearchPage/SearchPageB';

function App() {
  return (
    <div className="app">
    <Router>
      <Header />
      <User />
      <Authentication />
      <Switch>
      <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/searchb">
          <SearchPageB />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
