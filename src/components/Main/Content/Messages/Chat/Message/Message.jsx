import s from "./Message.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import Meta from "../../../../../UI/Meta/Meta";

const Message = ({ friend }) => {
  let isUser = true;
  // console.log(text);
  return (
    <div className={s.row}>
      <div id={99} className={isUser ? `${s.sent}` : `${s.received}`}>
        <div className={s.text}>
          <span>hello</span>
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
