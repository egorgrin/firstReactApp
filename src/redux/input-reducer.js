const UPDATE_INPUT = `update-content`;

let initialState = ``;

const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      state = action.prompt;
      return state;
    default:
      return state;
  }
};

export const updateInputAC = (prompt) => ({
  type: UPDATE_INPUT,
  prompt,
});

export default inputReducer;
