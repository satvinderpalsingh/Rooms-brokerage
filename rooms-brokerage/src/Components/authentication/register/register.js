import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link 
  } from "react-router-dom"

class Register extends Component {
  render() {
    return (
        <Router>
      <div class="card container ">
      <form>
          <h3>Sign Up</h3>

          <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" />
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" />
          </div>

          <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <button type="submit" className="btn btn-primary">Sign Up</button>
          <p className="forgot-password text-right">
              Already registered
              <Link to={"/login"}>SignIn</Link>
          </p>
      </form>
      </div>
      </Router>
  );
  }
}

export default Register;
