import s from "./Dialog_selector.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import ava from "../../../../../img/ava.png";
import Meta from "../../../../UI/Meta/Meta";

const Dialog_selector = (props) => {
  let path = `/messages/${props.userName.toLowerCase()}`;

  return (
    <NavLink
      to={path}
      className={(navData) =>
        `${s.dialogs_element} ${navData.isActive ? s.active : ""}`
      }
    >
      <div className={s.dialogs_element}>
        <div className={s.dialog_user_avatar}>
          <img src={ava} alt="" />
        </div>
        <div className={s.dialog_text_info}>
          <div className={s.text_info_top}>
            <div className={s.user_name}>{props.userName}</div>
            <div className={s.dialog_meta}>
              <Meta time={`5:26 PM`} externalClass={s.last_message_time} />
              <FontAwesomeIcon icon={faCheckDouble} />
            </div>
          </div>
          <div className={s.last_message}>
            <p>Last message text Lorem ipsum dolor.</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Dialog_selector;
