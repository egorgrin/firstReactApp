import s from './Chat.module.css';
import cover from '../../../../../img/chatBg.svg';
import {addMessageAC} from '../../../../../redux/friends-reducer';
import InputContainer from '../../../../UI/Input/InputContainer';


const Chat = ({ messages, friend, userInput, dispatch, chatWindowRef}) => {
  return (
      <div
          className={s.chat}
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: 'fill',
          }}
      >
        <div className={`${s.chat_window}`} ref={chatWindowRef}>
          {messages}
        </div>
        <div className={`${s.chat_input}`}>
          <InputContainer
              actionCreator={addMessageAC}
              recipientId={friend.id}

              userInput={userInput}
              dispatch={dispatch}
          />
        </div>
      </div>
  );
};

export default Chat;
