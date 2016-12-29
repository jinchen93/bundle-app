import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';


import '../styles/style.css';
import YoutubeApp from './youtube/containers/app';
import reducer from './rootReducer';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(ReduxThunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <YoutubeApp />
  </Provider>,
  document.querySelector('.root')
);