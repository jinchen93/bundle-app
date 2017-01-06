import { combineReducers } from 'redux';
import { 
  sidebar,
  videos,
  usernameInput,
  channels
} from './youtube/reducers';

export const rootReducer = combineReducers({
  sidebar,
  videos,
  usernameInput,
  channels
});