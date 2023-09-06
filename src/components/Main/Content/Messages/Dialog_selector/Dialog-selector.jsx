import s from './Dialog-selector.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import ava from '../../../../../img/ava.png';
import Meta from '../../../../UI/Meta/Meta';

const DialogSelector = ({friend}) => {
  let path = `/messages/${friend.name.toLowerCase()}`;

  let lastMessage = friend.dialog.at(-1).text.split(' ');

  return (
      <NavLink
          to={path}
          className={(navData) =>
              `${s.dialogs_element} ${navData.isActive ? s.active : ''}`
          }
      >
        <div className={s.dialogs_element}>
          <div className={s.dialog_user_avatar}>
            <img src={ava} alt=""/>
          </div>
          <div className={s.dialog_text_info}>
            <div className={s.text_info_top}>
              <div className={s.user_name}>{friend.name}</div>
              <div className={s.dialog_meta}>
                <Meta time={`5:26 PM`} externalClass={s.last_message_time}/>
                <FontAwesomeIcon icon={faCheckDouble}/>
              </div>
            </div>
            <p className={s.last_message}>{lastMessage.join(` `)}</p>
          </div>
        </div>
      </NavLink>
  );
};

export default DialogSelector;
