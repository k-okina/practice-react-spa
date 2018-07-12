import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

Object.values(document.getElementsByClassName('root')).forEach(element => {
  console.log(element);
  // props.childrenがobjectで1つだけくる
  console.log(<App />, <div><h1>hello world</h1></div>);
  // props.childrenがobject[]で2つくる
  console.log(<App />, <div><h1>hello world</h1><h2>hello again</h2></div>);
  console.log(typeof <App />);
  ReactDOM.render(<App />, element);
});
registerServiceWorker();
