import s from "./Messages.module.css";
import Dialog_selector from "./Dialog_selector/Dialog_selector";
import Chat_window from "./Chat/Chat_window.jsx";
import { Route, Routes } from "react-router-dom";

function Chat() {
  return null;
}

const Messages = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs_list}>
        <Dialog_selector userName="Vi" />
        <Dialog_selector userName="Jackie" />
        <Dialog_selector userName="Johnny" />
      </div>
      <Routes>
        <Route path={`/vi`} element={<Chat_window />} />
      </Routes>
    </div>
  );
};

export default Messages;
