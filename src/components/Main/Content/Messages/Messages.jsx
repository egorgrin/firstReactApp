import s from "./Messages.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckDouble, faGear } from "@fortawesome/free-solid-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import cover from "../../../../img/chatBg.svg";
// import { Scrollbar } from 'react-scrollbars-custom';

const Messages = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialog_list}>
        <div className={s.dialog_element}>
          <div className={s.dialog_user_avatar}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt=""
            />
          </div>
          <div className={s.dialog_text_info}>
            <p className={s.user_name}>User Name</p>
            <p className={s.last_message}>Last message</p>
          </div>
          <div className={s.dialog_message_status}>
            <FontAwesomeIcon icon={faCheckDouble} />
          </div>
        </div>
        <div className={`${s.dialog_element} ${s.hover}`}>
          <div className={s.dialog_user_avatar}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt=""
            />
          </div>
          <div className={s.dialog_text_info}>
            <p className={s.user_name}>User Name</p>
            <p className={s.last_message}>Last message</p>
          </div>
          <div className={s.dialog_message_status}>
            <FontAwesomeIcon icon={faCheckDouble} />
          </div>
        </div>
        <div className={`${s.dialog_element} ${s.active}`}>
          <div className={s.dialog_user_avatar}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt=""
            />
          </div>
          <div className={s.dialog_text_info}>
            <p className={s.user_name}>User Name</p>
            <p className={s.last_message}>Last message</p>
          </div>
          <div className={s.dialog_message_status}>
            <FontAwesomeIcon icon={faCheckDouble} />
          </div>
        </div>
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
                  <div className={s.meta}>
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
                  <div className={s.meta}>
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
                  <div className={s.meta}>
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
                  <div className={s.meta}>
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
                  <div className={s.meta}>
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
                  <div className={s.meta}>
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
                  <div className={s.meta}>
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
                  <div className={s.meta}>
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
                  <div className={s.meta}>
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
                  <div className={s.meta}>
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
          <textarea
            id="inputfield"
            type="text"
            placeholder="Enter your message"
          />
          <button className={s.send}>
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Messages;
