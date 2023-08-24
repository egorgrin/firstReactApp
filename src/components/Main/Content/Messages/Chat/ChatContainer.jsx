import Message from './Message/Message.jsx';
import {useParams} from 'react-router-dom';
import {useEffect, useRef, useState} from 'react';
import Chat from './Chat';


const ChatContainer = ({ friends, userInput, dispatch }) => {
  // Takes url parameter from useParams() that contains userName from Messages component
  const {userName} = useParams();

  const friend = friends.find(
      (friend) => friend.name.toLowerCase() === userName.toLowerCase(),
  );

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
      <Chat
          messages={messages}
          friend={friend}
          chatWindowRef={chatWindowRef}

          userInput={userInput}
          dispatch={dispatch}
      />
  );
};

export default ChatContainer;
