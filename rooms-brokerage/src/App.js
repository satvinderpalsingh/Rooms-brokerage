import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import modules from './modules';

function App() {
  const [currentTab, setCurrentTab] = useState('dashboard');
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul className="App-nav">
            {modules.map(module => ( // with a name, and routes
                <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                  <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
                </li>
            ))}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
         >
          Learn React
        </a>
      </header>
    </div>
    </Router>
  );
}

export default App;
