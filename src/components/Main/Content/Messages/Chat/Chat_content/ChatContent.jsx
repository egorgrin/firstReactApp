import s from "./ChatContent.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import Meta from "../../../../../UI/Meta/Meta";

const ChatContent = (props) => {
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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
                <Meta time={`5:26 PM`} externalClass={s.time_sent} />
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

export default ChatContent;
