
  
import React, { Component } from "react";

import "./contactus.css";
class Contactus extends Component {
  render() {
    return (
      <div>
        <section class="contact">
          <div class="content">
            <h2>Contact Us</h2>
            <p>In case you have any questions, suggestions or if you just want to
              have a general talk with us. You can write to us.</p>
          </div>
          <div class="container">
            <div class="contactInfo">
              <div class="box">
                <div class="icon"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                <div class="text">
                  <h3>Address</h3>
                  <p>24 temporary road,<br/>temporary address,<br/>55789</p>
                </div>
              </div>
              <div class="box">
                <div class="icon"><i class="fa fa-phone" aria-hidden="true"></i></div>
                <div class="text">
                  <h3>Phone</h3>
                  <p>+91 7064561413</p>
                </div>
              </div>
              <div class="box">
                <div class="icon"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                <div class="text">
                  <h3>Email</h3>
                  <p>jomep80769@greenkic.com</p>
                </div>
              </div>
            </div>
            <div class="contactForm">
              <form >
                <h2>Send Message</h2>
                <div class="inputBox">
                  <input type="text" name="" required="required" />
                  <span>Full Name</span>

                </div>
                <div class="inputBox">
                  <input type="text" name="" required="required" />
                  <span>Email</span>
                </div>
                <div class="inputBox">
                  <textarea required="required"></textarea>
                  <span>Type your Message...</span>
                </div>
                <div class="inputBox">
                  <input type="submit" name="" value="Send" />
                </div>
              </form>
            </div>
          </div>

        </section>

      </div>
    );
  }
}




export default Contactus;
