import s from "./Messages.module.css";
import Dialog_selector from "./Dialog_selector/Dialog_selector";
import Chat from "./Chat/Chat.jsx";
import { Route, Routes } from "react-router-dom";

const Messages = ({ user }) => {
  // console.log(props);
  let dialogSelectors = user.friends.map((friend) => (
    <Dialog_selector userName={friend.name} key={friend.id} />
  ));
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs_list}>
        {/*Dialog Selectors*/}
        {dialogSelectors}
      </div>
      <Routes>
        <Route path="/:userName" element={<Chat user={user} />} />
      </Routes>
    </div>
  );
};

export default Messages;
