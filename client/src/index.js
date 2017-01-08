import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

import '../styles/style.css';
import YoutubeApp from './youtube/containers/app';
import { rootReducer } from './rootReducer';
import { fetchChannelsUsernames } from './youtube/actions';

const middleware = [ReduxThunk];
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

store.dispatch(fetchChannelsUsernames());

ReactDOM.render(
  <Provider store={store}>
    <YoutubeApp />
  </Provider>,
  document.querySelector('.root')
)