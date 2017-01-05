import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

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
  const middleware = [ReduxThunk];
  const initialState = {
    channels: { all: channelArray, current: 0 }
  }
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );

  ReactDOM.render(
    <Provider store={store}>
      <YoutubeApp />
    </Provider>,
    document.querySelector('.root')
  )
})






