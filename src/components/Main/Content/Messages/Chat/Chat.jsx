import s from './Chat.module.css';
import cover from '../../../../../assets/img/chatBg.svg';
import TextareaContainer from '../../../../UI/Textarea/TextareaContainer';
import Message from './Message/Message';
import {useParams} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';


const Chat = ({ friends }) => {

  // Takes url parameter from useParams() that contains userName from Messages component
  const {userName} = useParams();
  const friend = friends.find(
      (friend) => friend.name.toLowerCase() === userName.toLowerCase(),
  );

  console.log(userName);

  let messages = friend.dialog.map((message) => (
      <Message key={message.id} friend={friend} message={message}/>
  ));

  /* ChatGPT scroll to bottom functional */
  const chatWindowRef = useRef(null);
  const [messageCount, setMessageCount] = useState(friend.dialog.length);
  useEffect(() => {
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    setMessageCount(friend.dialog.length);
  }, [friend.dialog.length]);
  /*--------------------------------------*/

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
          <TextareaContainer />
        </div>
      </div>
  );
};

export default Chat;
