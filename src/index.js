import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import Storage from 'redux-storage';
import CreateEngine from 'redux-storage-engine-localstorage';

import '../styles/style.css';
import YoutubeApp from './youtube/containers/app';
import { rootReducer } from './rootReducer';
import Request from 'superagent';
import { CHANNELS, CHANNEL_URL } from './youtube/constants';

// UGLIEST ASYNC INITIAL STATE EVER
let newChannels = [];
CHANNELS.forEach( (channel) => {
  const url = CHANNEL_URL + channel.username;
  Request.get(url).end( (error, response) => {
    if (error) {
      console.log(`Error occured while fetching channel ${channel.username}`);
    }
    else {
      newChannels = [ ...newChannels,
        {
          username: channel.username,
          name: response.body.items[0].snippet.title,
          thumbnail: response.body.items[0].snippet.thumbnails.default.url,
          uploads: response.body.items[0].contentDetails.relatedPlaylists.uploads
        }
      ]
      if (newChannels.length === CHANNELS.length) {
        const engine = CreateEngine('my-save-key');
        const middleware = [ReduxThunk, Storage.createMiddleware(engine)];
        const initialState = {
          channels: newChannels
        }
        const initStore = createStore(
          rootReducer,
          initialState,
          composeWithDevTools(
            applyMiddleware(...middleware)
          )
        );
        const load = Storage.createLoader(engine);
        load(initStore)
          .then( (newState) => {
            if (newState.channels === undefined) {
              newState = initialState;
            }
            else {
              // newState stays the same
            }
            // redux dev tools currently not working with new changes made to local storage
            const store = createStore(
              rootReducer,
              newState,
              composeWithDevTools(
                applyMiddleware(...middleware)
              )
            );
            ReactDOM.render(
              <Provider store={store}>
                <YoutubeApp />
              </Provider>,
              document.querySelector('.root'))
          }).catch( () => console.log("No previous state"))
      }
    };
  });
});
