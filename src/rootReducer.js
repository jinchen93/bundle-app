import { combineReducers } from 'redux';
import { 
  sidebar,
  videos,
  video,
  usernameInput,
  channels
} from './youtube/reducers';

export const rootReducer = combineReducers({
  sidebar,
  videos,
  video,
  usernameInput,
  channels
});