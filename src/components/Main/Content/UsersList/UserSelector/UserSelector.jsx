import s from './UserSelector.module.css';
import {NavLink} from 'react-router-dom';
import ava from '../../../../../assets/img/ava.png';
import {logDOM} from '@testing-library/react';

const UserSelector = ({user}) => {
  return (
      <div className={s.list_element}>
        <NavLink to={`/`}>
          <div className={s.avatar}>
            <img src={ava} alt=""/>
          </div>
        </NavLink>
        <div className={s.data}>
          <div className={s.data_top_row}>
            <div className={s.user_name}>
              {user.firstName ? user.firstName : 'Name'}
            </div>
            <div className={s.action}>
              {/*<FontAwesomeIcon icon={faEllipsis} />*/}
              Follow
            </div>
          </div>
          <p className={s.status}>
            {user.country ? user.country : 'Country'}
          </p>
        </div>
      </div>
  );
};

export default UserSelector;
