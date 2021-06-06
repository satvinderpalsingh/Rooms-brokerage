import React, { Component, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './sidebarcontent/sidebar';
import './header.css';
import { IconContext } from 'react-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { NavItem } from "react-bootstrap";

var say = "Sign-In";






function Header() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Router>
      <IconContext.Provider value={{ color: '' }}>
        <div>
          <div class="navbar navbar-light text-center">
            <Link to={'#'} >
              <span class="ml-auto "><AiIcons.AiOutlineBars onClick={showSidebar} /></span>
            </Link>
            <Link to={"/"}><span class="navbar-brand mb-0 h6 mr-auto">Home</span></Link>
            <div class="m-auto">
              <span class=" h6 mb-0">Buy</span>
              <span class="h6 mb-0">Sell</span>
              <span class=" h6 mb-0">Rent</span>
            </div>
            <Link to={"/register"}><span class="mr-0 h6 mb-0 mr-auto">Register</span></Link>

          </div>
          <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

      </IconContext.Provider>
    </Router>
  )
}

export default Header;
