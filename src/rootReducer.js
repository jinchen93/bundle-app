import { combineReducers } from 'redux';
import { 
  sidebar,
  channels,
  channel,
  videos,
  video,
  usernameInput
} from './youtube/reducers';

export const rootReducer = combineReducers({
  sidebar,
  channels,
  channel,
  videos,
  video,
  usernameInput
});