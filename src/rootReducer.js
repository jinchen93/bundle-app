import { combineReducers } from 'redux';
import { sidebar, channels, channel } from './youtube/reducers';

export default combineReducers({
  sidebar,
  channels,
  channel
});