import s from './FriendSelector.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckDouble} from '@fortawesome/free-solid-svg-icons';
import {NavLink} from 'react-router-dom';
import ava from '../../../../../img/ava.png';
import Meta from '../../../../UI/Meta/Meta';
import {faEllipsis} from '@fortawesome/free-solid-svg-icons/faEllipsis';

const FriendSelector = ({friend}) => {
  // let path = `/messages/${friend.name.toLowerCase()}`;

  let lastMessage = friend.dialog.at(-1).text.split(' ');

  return (
      <NavLink to={`/`}>
        <div className={s.list_element}>
          <div className={s.avatar}>
            <img src={ava} alt=""/>
          </div>
          <div className={s.data}>
            <div className={s.data_top_row}>
              <div className={s.user_name}>{friend.name}</div>
              <div className={s.action}>
                <FontAwesomeIcon icon={faEllipsis} />
              </div>
            </div>
            <p className={s.status}>Hey! It's my status!</p>
          </div>
        </div>
      </NavLink>
  );
};

export default FriendSelector;
