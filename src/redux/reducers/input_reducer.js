const UPDATE_INPUT_VALUE = `UPDATE_INPUT_VALUE`;

const input_reducer = (state = {username: 'EgorGrin', password: '0000'}, action) => {
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        [action.inputName]: action.value,
      };
    default:
      return state;
  }
};

export const updateInputValue = (inputName, value) => ({
  type: UPDATE_INPUT_VALUE,
  inputName,
  value,
});

export default input_reducer;
