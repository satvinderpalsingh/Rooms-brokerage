import React, { Component } from "react";
import './homepage.css'

class Homepage extends Component {
  render() {
    return (
      <div class="outerBox">
        <div class="innerBox">
          <div class="row d-flex justify-content-center"><h1>HOMEPAGE</h1></div>
          <div class="row">
            <div class="col-md-12 p-3 d-flex justify-content-center">
              <button class="btn btn-secondary btn-lg btn-block" >RENT ROOM</button>
            </div>
            <div class="col-md-12 p-3 d-flex justify-content-center">
              <button class="btn btn-secondary btn-lg btn-block" >BUY ROOM</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
