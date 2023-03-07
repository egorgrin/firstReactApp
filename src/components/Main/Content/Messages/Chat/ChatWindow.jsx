import s from "./ChatWindow.module.css";
import Input from "../../../../UI/Input/Input";
import ChatContent from "./Chat_content/ChatContent.jsx";
import { useParams } from "react-router-dom";
import cover from "../../../../../img/chatBg.svg";

const ChatWindow = (props) => {
  const a = useParams();
  // console.log(a);
  return (
    <div
      className={s.chat}
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "fill",
      }}
    >
      <ChatContent />
      <Input />
    </div>
  );
};

export default ChatWindow;
