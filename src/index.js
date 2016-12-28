import React from 'react';
import ReactDOM from 'react-dom';
import YoutubeApp from './youtube/index';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import '../styles/style.css';

ReactDOM.render(
  <YoutubeApp />,
  document.querySelector('.root')
);