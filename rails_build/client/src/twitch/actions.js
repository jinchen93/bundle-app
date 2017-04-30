import Request from 'superagent';
require('superagent-csrf')(Request);
import {CLIENT_ID, BASE_CHANNEL_URL, BASE_STREAM_URL} from './constants';
import {
  SELECT_TWITCH_CHANNEL,
  ON_TWITCH_INPUT,
  SET_TWITCH_CHANNELS,
  SET_TWITCH_CHANNEL,
} from './actionTypes';

export function selectTwitchChannel(channel) {
  return {type: SELECT_TWITCH_CHANNEL, payload: channel};
}

export function onTwitchInput(event) {
  return {type: ON_TWITCH_INPUT, payload: event};
}

export function fetchTwitchChannels() {
  return dispatch => {
    Request.get('/api/twitch_channels').end((error, response) => {
      if (error) {
        console.log('Error occured while fetching twitch channels');
        console.log('Error occured while fetching twitch channels');
      } else {
        dispatch(setTwitchChannels(response.body));
      }
    });
  };
}

export function fetchTwitchChannel(username, csrf_token) {
  return dispatch => {
    const url = BASE_CHANNEL_URL + username + CLIENT_ID;
    Request.get(url).end((error, response) => {
      if (error) {
        console.log(`Error occured while fetching twitch channel ${username}`);
      } else {
        const data = response.body;
        const newChannel = {
          username: username,
          display_name: data.display_name,
          logo: data.logo,
          status: data.status,
          profile_banner: data.profile_banner,
        };
        dispatch(postTwitchChannel(newChannel, csrf_token));
      }
    });
  };
}

function postTwitchChannel(channel, csrf_token) {
  return dispatch => {
    Request.post('/api/twitch_channels')
      .csrf(csrf_token)
      .send(channel)
      .end(() => {
        dispatch(fetchTwitchChannels());
      });
  };
}

// export function fetchTwitchStreamsInfo(channels) {
//   return dispatch => {
//     const newChannels = [];
//
//     channels.forEach(channel => {
//       const url = BASE_STREAM_URL + channel.username + CLIENT_ID;
//       let newChannel;
//
//       Request.get(url).end((error, res) => {
//         if (error) {
//           newChannel = {...channel, viewers: 0};
//           console.log(
//             `Error occured while fetching stream info for ${channel.username}`
//           );
//         } else {
//           newChannel = {
//             ...channel,
//             viewers: res.viewers === undefined ? 0 : res.viewers,
//           };
//         }
//
//         newChannels.push(newChannel);
//       });
//     });
//
//     dispatch(setTwitchChannels(newChannels));
//   };
// }

export function deleteAllTwitchChannels(options = {csrf_token: null}) {
  return dispatch => {
    Request.delete('/api/twitch_channels').csrf(options.csrf_token).end(() => {
      dispatch(fetchTwitchChannels());
    });
  };
}

export function deleteTwitchChannel(options = {id: null, csrf_token: null}) {
  return dispatch => {
    Request.delete(`/api/twitch_channels/${options.id}`)
      .csrf(options.csrf_token)
      .end(() => {
        dispatch(fetchTwitchChannels());
      });
  };
}

export function updateStreamInfo(channel) {
  return dispatch => {
    const url = BASE_STREAM_URL + channel.username + CLIENT_ID;
    console.log(url);
    Request.get(url).end((error, response) => {
      if (error) {
        console.log(
          `Error occured while updating stream info for ${channel.username}`
        );
      } else {
        let stream = response.body.stream;
        let new_channel = {
          ...channel,
          viewers: stream === null ? 0 : stream.viewers,
        };
        dispatch(setTwitchChannel(new_channel));
      }
    });
  };
}

function setTwitchChannel(channel) {
  return {type: SET_TWITCH_CHANNEL, payload: channel};
}

function setTwitchChannels(channels) {
  return {type: SET_TWITCH_CHANNELS, payload: channels};
}
