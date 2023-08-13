const ADD_MESSAGE = `add-message`;

const dialogsReducer = (userFriends, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const vi = userFriends[0];
      let message = {
        id: vi.dialog[vi.dialog.length - 1].id + 1,
        senderId: 0,
        text: action.textContent,
      };
      vi.dialog.push(message);
      return userFriends;
    default:
      return userFriends;
  }
};

export const addMessageAC = (textContent) => ({
  type: ADD_MESSAGE,
  textContent,
})

export default dialogsReducer;
