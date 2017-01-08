import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { 
  sidebarReducer,
  videosReducer,
  usernameInputReducer,
  channelsReducer
} from './youtube/reducers';

export const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  videos: videosReducer,
  usernameInput: usernameInputReducer,
  channels: channelsReducer,
  form: formReducer
});