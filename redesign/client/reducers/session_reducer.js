const _nullState = {
  currentUser: null,
  errors: [],
};

const sessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  switch (action.type) {
    default:
      return state;
  }
};

export default sessionReducer;
