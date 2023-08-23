import s from './Messages.module.css';
import Dialog_selector from './Dialog_selector/Dialog_selector';
import Chat from './Chat/Chat.jsx';
import {Route, Routes} from 'react-router-dom';

const Messages = ({friends, userInput, dispatch}) => {

  let dialogSelectors = friends.map((friend) => (
      <Dialog_selector friend={friend} key={friend.id}/>
  ));
  return (
      <div className={s.wrapper}>
        <div className={s.dialogs_list}>
          {dialogSelectors}
        </div>
        <Routes>
          <Route
              path="/:userName"
              element={
                <Chat friends={friends} userInput={userInput} dispatch={dispatch}/>
              }
          />
        </Routes>
      </div>
  );
};

export default Messages;
