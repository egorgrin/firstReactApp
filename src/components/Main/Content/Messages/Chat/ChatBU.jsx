import s from './Chat.module.css';
import Input from '../../../../UI/Input/Input';
import Message from './Message/Message.jsx';
import cover from '../../../../../img/chatBg.svg';
import {useParams} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import {addMessageAC} from '../../../../../redux/friends-reducer';
import InputContainer from '../../../../UI/Input/InputContainer';


const Chat = ({ friends, userInput, dispatch }) => {
  const {userName} = useParams();
  const friend = friends.find(
      (friend) => friend.name.toLowerCase() === userName.toLowerCase(),
  );


  /* ChatGPT scroll to bottom functional */
  const chatWindowRef = useRef(null);
  const [messageCount, setMessageCount] = useState(friend.dialog.length);
  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    setMessageCount(friend.dialog.length);
  }, [friend.dialog.length]);
  /*--------------------------------------*/

  let messages = friend.dialog.map((message) => (
      <Message key={message.id} friend={friend} message={message}/>
  ));

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
              userInput={userInput}
              dispatch={dispatch}
              actionCreator={addMessageAC}

              recipientId={friend.id}
          />
        </div>
      </div>
  );
};

export default Chat;
