import s from './UserSelector.module.css';
import {NavLink} from 'react-router-dom';
import ava from '../../../../../assets/img/ava.png';
import {logDOM} from '@testing-library/react';

const UserSelector = ({user}) => {

  let isFriend = false;

  return (
      <div className={s.list_element}>
        <NavLink to={`/profile/${user.id}`}>
          <div className={s.avatar}>
            <img src={ava} alt=""/>
          </div>
        </NavLink>
        <div className={s.data}>
          <div className={s.data_top_row}>
            <NavLink to={`/profile/${user.id}`}>
              <div className={s.user_name}>
                {user.firstName ? user.firstName : 'Name'}
              </div>
            </NavLink>
            {isFriend
                ? <div className={s.action}>Unfollow</div>
                : <div className={s.action}>Follow</div>}
          </div>
          <p className={s.status}>
            {user.country ? user.country : 'Country'}
          </p>
        </div>
      </div>
  );
};

export default UserSelector;
