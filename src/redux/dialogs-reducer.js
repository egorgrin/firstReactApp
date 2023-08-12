const dialogsReducer = (state, action) => {
  switch (action.type) {
    case `add-message`:
      let vi = state[0];
      let message = {
        id: vi.dialog[vi.dialog.length - 1].id + 1,
        senderId: 0,
        text: action.textContent,
      };
      vi.dialog.push(message);
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;