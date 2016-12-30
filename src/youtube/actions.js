import { 
  SET_SIDEBAR_TOGGLE,
  SET_CHANNELS,
  SELECT_CHANNEL,
  SELECT_VIDEO,
  SET_VIDEOS,
  ADD_CHANNEL,
  ON_USERNAME_INPUT
} from './actionTypes';
import Request from 'superagent';
import { PLAYLIST_URL, CHANNEL_URL } from './constants';

export function toggleSidebar(status) {
  const newStatus = !status;
  return {
    type: SET_SIDEBAR_TOGGLE,
    payload: newStatus
  };
};

export function fetchChannels(channels) {
  return (dispatch) => {
    let newChannels = [];
    channels.forEach( (channel) => {
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
          ];
          if ( newChannels.length === channels.length ) {
            dispatch(setChannels(newChannels));
          }
        };
      });
    });
  };
};

export function fetchChannel(username) {
  console.log(username);
  return (dispatch) => {
    const url = CHANNEL_URL + username;
    Request.get(url).end( (error, response) => {
      if (error) {
        console.log(`Error occured while fetching channel ${username}`);
      }
      else {
        const newChannel = {
          username: username,
          name: response.body.items[0].snippet.title,
          thumbnail: response.body.items[0].snippet.thumbnails.default.url,
          uploads: response.body.items[0].contentDetails.relatedPlaylists.uploads
        };
        dispatch(addChannel(newChannel));
      };
    });
  };
};

export function addChannel(channel) {
  return {
    type: ADD_CHANNEL,
    payload: channel
  };
};

export function setChannels(channels) {
  return {
    type: SET_CHANNELS,
    payload: channels
  };
};

export function selectChannel(channel) {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
};

export function selectVideo(video) {
  return {
    type: SELECT_VIDEO,
    payload: video
  };
};

export function fetchVideos(channel) {
  const url = PLAYLIST_URL + channel.uploads;
  return (dispatch) => {  
    Request.get(url).end( (error, response) => {
      if (error) {
        console.log('Error occured while fetching videos');
      }
      else {
        const videos = response.body.items.map( (video) => video.snippet );
        dispatch(setVideos(videos));
      };
    });
  };
};

export function setVideos(videos) {
  return {
    type: SET_VIDEOS,
    payload: videos
  };
};

export function onUsernameInput(event) {
  return {
    type: ON_USERNAME_INPUT,
    payload: event
  };
};