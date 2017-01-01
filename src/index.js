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
import { CHANNELS, CHANNEL_URL } from './youtube/constants';

const arrayChannelPromise = CHANNELS.map( channel => {
  return (
    new Promise( (resolve, reject) => {
      fetch(CHANNEL_URL + channel.username)
        .then( res => { res.json()
          .then( data => {
            data.username = channel.username;
            resolve(data);
          })
      })
    })
  )
})

const makeChannelArray = new Promise( resolve => {
  Promise.all(arrayChannelPromise).then( data => {
    const initialChannels = data.map( channel => {
      const channelItem = channel.items[0];
      return {
        username: channel.username,
        name: channelItem.snippet.title,
        thumbnail: channelItem.snippet.thumbnails.default.url,
        uploads: channelItem.contentDetails.relatedPlaylists.uploads
      }
    })
    resolve(initialChannels);
  })
})

makeChannelArray.then( channelArray => {
  const engine = CreateEngine('my-save-key');
  const middleware = [ReduxThunk, Storage.createMiddleware(engine)];
  const initialState = {
    channels: channelArray
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
    })
})






