import s from './Messages.module.css';
import Dialog_selector from './Dialog_selector/Dialog_selector';
import Chat from './Chat/Chat.jsx';
import {Route, Routes} from 'react-router-dom';

const Messages = ({user, dispatch}) => {
  let dialogSelectors = user.friends.map((friend) => (
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
                <Chat user={user} dispatch={dispatch}/>
              }
          />
        </Routes>
      </div>
  );
};

export default Messages;
