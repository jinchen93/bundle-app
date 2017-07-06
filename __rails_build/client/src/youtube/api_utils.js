import Request from 'superagent';
import {PLAYLIST_URL, CHANNEL_USERNAME_URL, CHANNEL_ID_URL} from './constants';

export const fetchAllChannels = callback => {
  Request.get('/api/youtube_channels')
    .then(res => callback(res.body));
};

export const fetchChannel = (username, callback) => {
  const url = CHANNEL_USERNAME_URL + username;

  Request.get(url)
    .then(res => {
      const { items } = res.body;
      if (items[0] !== undefined) {
        const newChannel = {
          username: username,
          name: items[0].snippet.title,
          thumbnail: items[0].snippet.thumbnails.default.url,
          uploads: items[0].contentDetails.relatedPlaylists.uploads,
        };
        saveChannel(newChannel, callback);
      } 
    });
};

const saveChannel = (channel, callback) => {
  Request.post('/api/youtube_channels')
    .send(channel)
    .end(callback());
};