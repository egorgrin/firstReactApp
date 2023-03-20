import s from "./Chat.module.css";
import Input from "../../../../UI/Input/Input";
import Message from "./Message/Message.jsx";
import cover from "../../../../../img/chatBg.svg";
import { useParams } from "react-router-dom";

const Chat = ({ user }) => {
  const { userName } = useParams();
  const friend = user.friends.find(
    (friend) => friend.name.toLowerCase() === userName.toLowerCase()
  );
  let messages = friend.dialog.map((message) => (
    <Message friend={friend} message={message} key={message.id} />
  ));
  return (
    <div
      className={s.chat}
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "fill",
      }}
    >
      <div className={`${s.chat_window}`}>{messages}</div>
      <div className={`${s.chat_input}`}>
        <Input />
      </div>
    </div>
  );
};

export default Chat;
