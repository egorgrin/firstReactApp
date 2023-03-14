import s from "./Message.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import Meta from "../../../../../UI/Meta/Meta";

const Message = (props) => {
  let isUser = props.userId === 0;
  // console.log(props.text);
  return (
    <div className={s.row}>
      <div id={props.id} className={isUser ? `${s.sent}` : `${s.received}`}>
        <div className={s.text}>
          <span>{`${props.message}`}</span>
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