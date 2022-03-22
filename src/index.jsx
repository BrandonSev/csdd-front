import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './indexStyleSheet.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

window.process = {};

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById('root')
);
