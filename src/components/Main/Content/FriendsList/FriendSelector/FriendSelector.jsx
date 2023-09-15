import s from './FriendSelector.module.css';
import {NavLink} from 'react-router-dom';
import ava from '../../../../../assets/img/ava.png';

const FriendSelector = ({friend}) => {
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
                Unfollow
              </div>
            </div>
            <p className={s.status}>Hey! It's my status!</p>
          </div>
        </div>
      </NavLink>
  );
};

export default FriendSelector;
