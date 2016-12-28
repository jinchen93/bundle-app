import { 
  SET_SIDEBAR_TOGGLE, 
  SELECT_CHANNEL 
} from './actionTypes';

export const toggleSidebar = () => {
  return {
    type: SET_SIDEBAR_TOGGLE
  };
};

export const selectChannel = (channel) => {
  return {
    type: SELECT_CHANNEL
  };
};