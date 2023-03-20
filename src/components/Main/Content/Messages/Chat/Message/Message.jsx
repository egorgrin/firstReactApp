import s from "./Message.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import Meta from "../../../../../UI/Meta/Meta";

const Message = ({ friend, message }) => {
  let isUser = message.senderId === 0;

  return (
    <div className={s.row}>
      <div id={friend.id} className={isUser ? `${s.sent}` : `${s.received}`}>
        <div className={s.text}>
          <span>{message.text}</span>
          <div className={s.message_meta}>
            <Meta time={`5:26 PM`} externalClass={s.time_sent} />
            {!isUser && (
              <span className={s.status}>
                <FontAwesomeIcon icon={faCheckDouble} />
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
