import s from "./Messages.module.css";
import Dialog_selector from "./Dialog_selector/Dialog_selector";
import Chat from "./Chat/Chat.jsx";
import { Route, Routes } from "react-router-dom";
let friends = [
  {
    id: 0,
    name: `Vi`,
  },
  {
    id: 1,
    name: `Jackie`,
  },

  {
    id: 2,
    name: `Johnny`,
  },
];
const Messages = (props) => {
  let dialogSelectors = friends.map((friend) => (
    <Dialog_selector userName={friend.name} key={friend.id} />
  ));
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs_list}>{dialogSelectors}</div>
      <Routes>
        <Route path="/:userName" element={<Chat state={props.state} />} />
      </Routes>
    </div>
  );
};

export default Messages;
