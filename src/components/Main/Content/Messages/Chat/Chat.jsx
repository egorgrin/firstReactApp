import s from "./Chat.module.css";
import Input from "../../../../UI/Input/Input";
import Message from "./Message/Message.jsx";
import cover from "../../../../../img/chatBg.svg";

const Chat = (props) => {
  /*const a = useParams();
  console.log(a);*/
  let messages = props.messages.map((message) => (
    <Message
      key={message.id}
      id={message.id}
      userId={message.userId}
      message={message.text}
    />
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
      <Input />
    </div>
  );
};

export default Chat;
