import s from "./ChatWindow.module.css";
import Input from "../../../../UI/Input/Input";
import ChatContent from "./Chat_content/ChatContent.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import cover from "../../../../../img/chatBg.svg";
import { useParams } from "react-router-dom";

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
