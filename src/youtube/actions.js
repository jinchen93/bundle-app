import { 
  SET_SIDEBAR_TOGGLE, 
  SELECT_CHANNEL,
  SELECT_VIDEO
} from './actionTypes';

export const toggleSidebar = () => {
  return {
    type: SET_SIDEBAR_TOGGLE
  };
};

export const selectChannel = (channel) => {
  return {
    type: SELECT_CHANNEL,
    payload: channel
  };
};

export const selectVideo = (video) => {
  return {
    type: SELECT_VIDEO,
    payload: video
  }
}