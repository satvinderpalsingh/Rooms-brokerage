import React, { Component } from "react";
import Aboutus from './aboutus/aboutus';
import Contactus from './contactus/contactus';
import Help from './helpandfaq/helpandfaq';
import Homepage from './homepage/homepage';
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
                    <Route path='/' exact component = {Homepage}></Route>
                    <Route path='/helpandfaq' exact component = {Help}></Route>
                    <Route path='/contactus' exact component = {Contactus}></Route>
                    <Route path='/aboutus' exact component = {Aboutus}></Route>
                </Switch>
            </div>
        </Router>

    );
  }
}

export default home ;