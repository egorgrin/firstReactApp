import s from './UserSelector.module.css';
import {NavLink} from 'react-router-dom';
import ava from '../../../../../img/ava.png';

const UserSelector = ({friend}) => {
  // let path = `/messages/${friend.name.toLowerCase()}`;
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
                {/*<FontAwesomeIcon icon={faEllipsis} />*/}
                Follow
              </div>
            </div>
            <p className={s.status}>Hey! It's my status!</p>
          </div>
        </div>
      </NavLink>
  );
};

export default UserSelector;
