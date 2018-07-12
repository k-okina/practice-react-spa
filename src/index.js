import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

setInterval(() => {
  const target = document.createElement('div');
  ReactDOM.render(<App />, target);
  document.body.appendChild(target);
}, 1000);
registerServiceWorker();
