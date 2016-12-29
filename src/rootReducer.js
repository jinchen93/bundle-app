import { combineReducers } from 'redux';
import { 
  sidebar,
  channels,
  channel,
  video
} from './youtube/reducers';

export default combineReducers({
  sidebar,
  channels,
  channel,
  video
});