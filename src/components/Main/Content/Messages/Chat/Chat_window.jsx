import s from "./Chat_window.module.css";
import Chat_content from "./Chat_content/Chat_content.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import cover from "../../../../../img/chatBg.svg";

const Chat_window = (props) => {
  return (
    <div
      className={s.chat}
      style={{
        backgroundImage: `url(${cover})`,
        backgroundSize: "fill",
      }}
    >
      <Chat_content />
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

export default Chat_window;
