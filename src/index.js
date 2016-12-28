import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import '../styles/style.css';
import YoutubeApp from './youtube/index';
import reducer from './rootReducer';


const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <YoutubeApp />
  </Provider>,
  document.querySelector('.root')
);