import s from "./ChatWindow.module.css";
import ChatContent from "./Chat_content/ChatContent.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import cover from "../../../../../img/chatBg.svg";
import { useParams } from "react-router-dom";

const ChatWindow = (props) => {
  const a = useParams();
  console.log(a);
  return (
    <div
      className={s.chat}
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "fill",
      }}
    >
      <ChatContent />
      <div className={s.input}>
        <button className={s.attachment}>
          <FontAwesomeIcon icon={faPaperclip} />
        </button>
        <textarea placeholder="Enter your message" />
        <button className={s.send}>
          <FontAwesomeIcon icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
