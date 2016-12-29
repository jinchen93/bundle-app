import { combineReducers } from 'redux';
import { 
  sidebar,
  channels,
  channel,
  videos,
  video
} from './youtube/reducers';

export default combineReducers({
  sidebar,
  channels,
  channel,
  videos,
  video
});