import {
  SET_CHANNELS,
  SELECT_CHANNEL,
  SELECT_VIDEO,
  SET_VIDEOS,
  ON_USERNAME_INPUT,
} from './actionTypes';
import * as APIUtils from './api_utils';
import Request from 'superagent';
import {PLAYLIST_URL, CHANNEL_USERNAME_URL, CHANNEL_ID_URL} from './constants';

export function fetchChannelsUsernames() {
  return dispatch => {
    APIUtils.fetchAllChannels( channels => {
      console.log(channels);
      dispatch(setChannels(channels));
      dispatch(fetchChannel(channels[0]));
    });
  };
}

export function setChannels(channels) {
  return {type: SET_CHANNELS, payload: channels};
}

export function fetchChannel(username) {
  return dispatch => {
    APIUtils.fetchChannel(username, () => dispatch(fetchChannelsUsernames()));
  };
}

export function selectChannel(channel) {
  return {type: SELECT_CHANNEL, payload: channel};
}

export function deleteAllChannels(options = {csrf_token: null}) {
  return dispatch => {
    Request.delete(`/api/youtube_channels`).csrf(options.csrf_token).end(() => {
      dispatch(fetchChannelsUsernames());
    });
  };
}

export function deleteChannel(options = {id: null, csrf_token: null}) {
  return dispatch => {
    Request.delete(`/api/youtube_channels/${options.id}`)
      .csrf(options.csrf_token)
      .end(() => {
        dispatch(fetchChannelsUsernames());
      });
  };
}

// ========== END CHANNEL ACTIONS ==========
// ========== VIDEO ACTIONS ==========
export function selectVideo(video) {
  return {type: SELECT_VIDEO, payload: video};
}

export function fetchVideos(channel) {
  return dispatch => {
    if (channel !== undefined) {
      const url = PLAYLIST_URL + channel.uploads;
      Request.get(url).end((error, response) => {
        if (error) {
          console.log('Error occured while fetching videos');
        } else {
          const videos = response.body.items.map(video => video.snippet);
          dispatch(setVideos(videos));
        }
      });
    } else {
      dispatch(setVideos([]));
    }
  };
}

export function setVideos(videos) {
  return {type: SET_VIDEOS, payload: videos};
}

// ========== END VIDEO ACTIONS ==========
// ========== FORM ACTIONS ==========
export function onUsernameInput(event) {
  return {type: ON_USERNAME_INPUT, payload: event};
}
