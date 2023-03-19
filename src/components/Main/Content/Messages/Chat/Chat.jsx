import s from "./Chat.module.css";
import Input from "../../../../UI/Input/Input";
import Message from "./Message/Message.jsx";
import cover from "../../../../../img/chatBg.svg";
import { useParams } from "react-router-dom";

const Chat = ({ user }) => {
  const { userName } = useParams();
  let [friend] = user.friends.filter(
    (friend) => friend.name.toLowerCase() === userName.toLowerCase()
  );
  console.log(friend);
  // let messages = friend.dialog.map((message) => <Message />);
  return (
    <div
      className={s.chat}
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "fill",
      }}
    >
      <div className={`${s.chat_window}`}>hello</div>
      <div className={`${s.chat_input}`}>
        <Input />
      </div>
    </div>
  );
};

export default Chat;
