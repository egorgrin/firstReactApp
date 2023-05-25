import s from './Chat.module.css';
import Input from '../../../../UI/Input/Input';
import Message from './Message/Message.jsx';
import cover from '../../../../../img/chatBg.svg';
import {useParams} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';

const Chat = ({user, addMessage}) => {
  const {userName} = useParams();
  const friend = user.friends.find(
      (friend) => friend.name.toLowerCase() === userName.toLowerCase(),
  );

  /* Chat gpt scroll to bottom functional */

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
          <Input addMessage={addMessage}/>
        </div>
      </div>
  );
};

export default Chat;
