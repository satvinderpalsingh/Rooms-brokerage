import React from 'react';
import User from './Components/UserDashboard/user';
import './App.css';
import Home from './Components/Home/Homepage/Home';
import Header from './Components/Utility/Header/header';
import Footer from './Components/Utility/Footer/footer';
import Authentication from './Components/authentication/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Components/Home/index';
import Owner from './Components/owner/index';
import SearchPage from './Components/Home/SearchPage/SearchPage';
import SearchPageB from './Components/Home/SearchPage/SearchPageB';

function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/search">
            <SearchPage />
            </Route>
            <Route exact path="/searchb">
            <SearchPageB />
            </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/login">
            <Authentication />
          </Route>
          <Route exact path="/register">
            <Authentication />
          </Route>
          <Route exact path="/Ownerupload">
              <Owner/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;