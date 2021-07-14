import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import history from "./history";

ReactDOM.render(
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>,
    document.getElementById('root')
);