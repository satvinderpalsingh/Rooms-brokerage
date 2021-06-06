import React, { Component } from "react";

import Login from './login/login';
import Register from './register/register';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class home extends Component {
  render() {
    return (

        <Router>
            <div>
                <Switch>
                  <Route path='/login' exact component = {Login}></Route>
                  <Route path='/register' exact component = {Register}></Route>
                </Switch>
            </div>
        </Router>

    );
  }
}

export default home ;