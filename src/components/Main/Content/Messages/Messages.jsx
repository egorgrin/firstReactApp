import s from "./Messages.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faGear } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import cover from "../../../../img/chatBg.svg";
import ava from "../../../../img/ava.png";
import { NavLink } from "react-router-dom";

const DialogElement = (props) => {
  let path = `/messages/${props.userName.toLowerCase()}`;

  return (
    <NavLink to={path}>
      <div className={s.dialog_element}>
        <div className={s.dialog_user_avatar}>
          <img src={ava} alt="" />
        </div>
        <div className={s.dialog_text_info}>
          <div className={s.text_info_top}>
            <div className={s.user_name}>{props.userName}</div>
            <div className={s.dialog_meta}>
              <span className={s.time}>5:25 PM</span>
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
const Messages = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialog_list}>
        <DialogElement userName="Vi" />
        <DialogElement userName="Jackie" />
        <DialogElement userName="Johnny" />
      </div>
      <div className={s.chat_wrapper}>
        <div
          className={`${s.chat} ${s.custom_scrollbar}`}
          style={{
            backgroundImage: `url(${cover})`,
            backgroundSize: "fill",
          }}
        >
          <div className={s.messages}>
            <div className={s.row}>
              <div className={s.received}>
                <div className={s.text}>
                  Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consecteturLorem
                  ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
                  consectetur.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:24 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.sent}>
                <div className={s.text}>
                  Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
                  ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
                  dolor.Lorem ipsum dolor.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:25 PM</p>
                    <p className={s.status}>
                      <FontAwesomeIcon icon={faCheckDouble} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.received}>
                <div className={s.text}>
                  Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consecteturLorem
                  ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
                  consectetur.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:24 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.sent}>
                <div className={s.text}>
                  Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
                  ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
                  dolor.Lorem ipsum dolor.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:25 PM</p>
                    <p className={s.status}>
                      <FontAwesomeIcon icon={faCheckDouble} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.received}>
                <div className={s.text}>
                  Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consecteturLorem
                  ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
                  consectetur.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:24 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.sent}>
                <div className={s.text}>
                  Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
                  ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
                  dolor.Lorem ipsum dolor.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:25 PM</p>
                    <p className={s.status}>
                      <FontAwesomeIcon icon={faCheckDouble} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.received}>
                <div className={s.text}>
                  Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consecteturLorem
                  ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
                  consectetur.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:24 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.sent}>
                <div className={s.text}>
                  Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
                  ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
                  dolor.Lorem ipsum dolor.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:25 PM</p>
                    <p className={s.status}>
                      <FontAwesomeIcon icon={faCheckDouble} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.received}>
                <div className={s.text}>
                  Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit
                  amet, consecteturLorem ipsum dolor sit amet, consecteturLorem
                  ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
                  consectetur.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:24 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.row}>
              <div className={s.sent}>
                <div className={s.text}>
                  Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
                  ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
                  dolor.Lorem ipsum dolor.
                  <div className={s.message_meta}>
                    <p className={s.time}>5:25 PM</p>
                    <p className={s.status}>
                      <FontAwesomeIcon icon={faCheckDouble} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
};

export default Messages;
