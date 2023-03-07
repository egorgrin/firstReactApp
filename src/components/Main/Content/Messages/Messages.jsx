import s from "./Messages.module.css";
import Dialog_selector from "./Dialog_selector/Dialog_selector";
import ChatWindow from "./Chat/ChatWindow.jsx";
import { Route, Routes } from "react-router-dom";

const Messages = (props) => {
  let dialogSelectors = props.friends.map((friend) => (
    <Dialog_selector userName={friend.name} key={friend.id} />
  ));
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs_list}>
        {/*<Dialog_selector userName="Vi" />
        <Dialog_selector userName="Jackie" />
        <Dialog_selector userName="Johnny" />*/}

        {/* Lesson 25 .map method */}

        {dialogSelectors}

        {/* ---------- */}
      </div>
      <Routes>
        <Route path="/:userName" element={<ChatWindow />} />
      </Routes>
    </div>
  );
};

export default Messages;
