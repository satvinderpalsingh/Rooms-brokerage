import React, { Component } from "react";
import Addetails from './addetails/addetails';
import Map from './map/map';
import Userhomepage from './userhomepage/userhomepage';
import Wishlist from './wishlist/wishlist';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

class user extends Component {
  render() {
    return (

        <Router>
            <div>
                <Switch>
                    <Route path='/userpage' exact component = {Userhomepage}></Route>
                    <Route path='/addetails' exact component = {Addetails}></Route>
                    <Route path='/map' exact component = {Map}></Route>
                    <Route path='/wishlist' exact component = {Wishlist}></Route>
                </Switch>
            </div>
        </Router>

    );
  }
}

export default user ;