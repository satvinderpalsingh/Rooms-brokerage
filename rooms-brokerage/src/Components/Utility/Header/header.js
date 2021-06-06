import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

var say = "Sign-In";


const htmlcode = (

<nav class="navbar navbar-light fixed-top bg-light">
  <span class="navbar-brand mb-0 h1">Home</span>
  
  <span class="mr-1 h6 mb-0">Buy</span>
  <span class="mr-1 h6 mb-0">Sell</span>
  <span class="mr-1 h6 mb-0">Rent</span>
  <span class="mr-2 h6 mb-0">{say}</span>

</nav>

)


class Header extends Component {
  render() {
    return htmlcode;
  }
}

export default Header;
