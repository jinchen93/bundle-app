import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import '../styles/style.css';

ReactDOM.render(
  <App />,
  document.querySelector('.root')
);
