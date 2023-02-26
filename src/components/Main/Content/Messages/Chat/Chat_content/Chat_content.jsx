import s from "./Chat_content.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";

const Chat_content = (props) => {
  return (
    <div className={`${s.chat_window}`}>
      <div className={s.messages}>
        <div className={s.row}>
          <div className={s.received}>
            <div className={s.text}>
              Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
              consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum
              dolor sit amet, consecteturLorem ipsum dolor sit amet,
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
              Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
              dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
              ipsum dolor.
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
              Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
              consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum
              dolor sit amet, consecteturLorem ipsum dolor sit amet,
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
              Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
              dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
              ipsum dolor.
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
              Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
              consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum
              dolor sit amet, consecteturLorem ipsum dolor sit amet,
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
              Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
              dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
              ipsum dolor.
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
              Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
              consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum
              dolor sit amet, consecteturLorem ipsum dolor sit amet,
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
              Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
              dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
              ipsum dolor.
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
              Lorem ipsum dolor sit amet, consecteturLorem ipsum dolor sit amet,
              consecteturLorem ipsum dolor sit amet, consecteturLorem ipsum
              dolor sit amet, consecteturLorem ipsum dolor sit amet,
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
              Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum
              dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem
              ipsum dolor.
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
  );
};

export default Chat_content;
