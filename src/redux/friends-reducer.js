const ADD_MESSAGE = `add-message`;

let initialState = [
  {
    id: 0,
    name: `Vi`,
    dialog: [
      {id: 0, senderId: 0, text: 'Привет, как дела?'},
      {
        id: 1,
        senderId: 1,
        text: 'Привет! Все хорошо, спасибо. А у тебя?',
      },
      {
        id: 2,
        senderId: 0,
        text: 'Неплохо. Работаю сегодня целый день. А ты чем занимаешься?',
      },
      {
        id: 3,
        senderId: 1,
        text: 'Я работаю над новым проектом.',
      },
      {id: 4, senderId: 0, text: 'Круто, успехов тебе в этом деле!'},
      {
        id: 5,
        senderId: 1,
        text: 'Спасибо! Я очень стараюсь. А у тебя есть какие-нибудь новости?',
      },
      {
        id: 6,
        senderId: 0,
        text: 'Да, я планирую съездить на выходные к морю. Очень хочу отдохнуть.',
      },
      {
        id: 7,
        senderId: 1,
        text: 'Звучит замечательно! Я надеюсь, что ты хорошо проведешь время. Не забудь сделать мне пару красивых фото на память!',
      },
      {
        id: 8,
        senderId: 0,
        text: 'Конечно, не забуду. А как у тебя дела с личной жизнью?',
      },
      {
        id: 9,
        senderId: 1,
        text: 'Ничего особенного, просто работа и проекты занимают большую часть времени. Но я не жалуюсь. Как твои дела в этом плане?',
      },
      {
        id: 10,
        senderId: 0,
        text: 'Тоже не особо, но я не переживаю. Время еще есть!',
      },
    ],
  },
  {
    id: 1,
    name: `Jackie`,
    dialog: [
      {id: 0, text: 'Привет, как дела?'},
      {id: 1, text: 'Привет! Все отлично, спасибо. А у тебя?'},
      {
        id: 2,
        senderId: 1,
        text: 'Я тоже неплохо. Скоро планирую съездить на море.',
      },
      {
        id: 3,
        senderId: 0,
        text: 'Какой город ты выбрал?',
      },
      {
        id: 4,
        senderId: 1,
        text: 'Я планирую поехать в Сочи, там гораздо интереснее, чем в Анапе.',
      },
      {
        id: 5,
        senderId: 0,
        text: 'Да, я тоже думаю о Сочи. Когда ты планируешь ехать?',
      },
      {id: 6, text: 'Я думаю, что через неделю или две.'},
      {
        id: 7,
        senderId: 0,
        text: 'А я только что вернулся из отпуска, мне нужно немного отдохнуть.',
      },
      {
        id: 8,
        senderId: 1,
        text: 'Да, я понимаю. Надеюсь, что ты тоже провел время весело!',
      },
      {
        id: 9,
        senderId: 0,
        text: 'Да, отлично провел время! Я был на море, на пляже, в горах, и даже попробовал бунги-джампинг.',
      },
    ],
  },
  {
    id: 2,
    name: `Johnny`,
    dialog: [
      {id: 0, text: 'Привет, Алекс!'},
      {id: 1, text: 'Привет, Ви! Как дела?'},
      {
        id: 2,
        senderId: 0,
        text: 'Все хорошо, спасибо. Как у тебя настроение?',
      },
      {id: 3, text: 'Неплохо, я рад, что наступило лето!'},
      {id: 4, text: 'Да, лето это всегда здорово!'},
    ],
  },
];

export const addMessageAC = (userInput, recipientId) => ({
  type: ADD_MESSAGE,
  userInput,
  recipientId,
});

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let recipient = state.find(friend => friend.id === action.recipientId);
      let message = {
        id: recipient.dialog[recipient.dialog.length - 1].id + 1,
        senderId: action.recipientId,
        text: action.userInput,
      };
      recipient.dialog.push(message);
      return state;
    default:
      return state;
  }
};

export default friendsReducer;
