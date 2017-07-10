import { RECEIVE_MODE } from "../actions/mode_actions";

export const _nullState = "YOUTUBE";

const modeReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MODE:
      return action.mode;
    default:
      return state;
  }
};

export default modeReducer;
