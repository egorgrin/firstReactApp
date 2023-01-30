import s from './Messages.module.css';
import { Parallax } from 'react-parallax';

// import background from '../../../../img/cover.webp';
import cover from '../../../../img/chatBg.png';

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
            <p>Status</p>
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
            <p>Status</p>
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
            <p>Status</p>
          </div>
        </div>
      </div>
      {/*<div
        className={s.chat}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
        }}
      ></div>*/}
      <div className={s.chat}>
        <Parallax className={s.cover} bgImage={cover} strength={500}></Parallax>
      </div>
    </div>
  );
};

export default Messages;
