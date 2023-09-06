import s from './Messages.module.css';
import DialogSelector from './Dialog_selector/Dialog-selector';
import {Route, Routes} from 'react-router-dom';
import ChatContainer from './Chat/ChatContainer';

const Messages = ({friends}) => {

  let dialogSelectors = friends.map((friend) => (
      <DialogSelector friend={friend} key={friend.id}/>
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
                <ChatContainer />
              }
          />
        </Routes>
      </div>
  );
};

export default Messages;
