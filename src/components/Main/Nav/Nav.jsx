import s from './Nav.module.css';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faGear,
  faEnvelope,
  faUser,
  faNewspaper,
  faMusic,
  faUserGroup,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import {useSelector} from 'react-redux';


const Nav = () => {
  let user = useSelector((state) => state.auth.data);
  return (
      <aside className={s.wrapper}>
        <nav>
          <li>
            <NavLink
                className={(navData) => (navData.isActive ? `${s.active}` : '')}
                to={`profile/${user.id}`}
            >
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className={s.text}>Profile</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={(navData) => (navData.isActive ? `${s.active}` : '')}
                to="/messages"
            >
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faEnvelope}/>
                </div>
                <div className={s.text}>Messages</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={(navData) => (navData.isActive ? `${s.active}` : '')}
                to="/friends"
            >
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faUserGroup}/>
                </div>
                <div className={s.text}>Friends</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={(navData) => (navData.isActive ? `${s.active}` : '')}
                to="/users"
            >
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </div>
                <div className={s.text}>Find User</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={(navData) => (navData.isActive ? `${s.active}` : '')}
                to="/news"
            >
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faNewspaper}/>
                </div>
                <div className={s.text}>News</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={(navData) => (navData.isActive ? `${s.active}` : '')}
                to="/music"
            >
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faMusic}/>
                </div>
                <div className={s.text}>Music</div>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink
                className={(navData) => (navData.isActive ? `${s.active}` : '')}
                to="/settings"
            >
              <div className={s.item}>
                <div className={s.icon}>
                  <FontAwesomeIcon icon={faGear}/>
                </div>
                <div className={s.text}>Settings</div>
              </div>
            </NavLink>
          </li>
        </nav>
      </aside>
  );
};

export default Nav;
