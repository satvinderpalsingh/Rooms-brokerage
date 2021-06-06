import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

const htmlcode = (
  <div>
    {/* <!-- Footer --> */}
      <footer class="page-footer font-small bg-light fixed-bottom">
        
        {/* <!-- Copyright --> */}
        <div class="footer-copyright py-1 ml-4">© 2021 Copyright
        {/* <!-- Copyright --> */}

        <i class="fa fa-info-circle py-1 float-right mr-4 ml-4" aria-hidden="true"></i>
        <i class="fa fa-phone py-1 float-right ml-4"></i>
        <i class="fa fa-address-card py-1 float-right" aria-hidden="true"></i>
        
        </div>
      </footer>
      {/* <!-- Footer --> */}
  </div>

);



class Footer extends Component {
  render() {
    return htmlcode;
  }
}

export default Footer;
