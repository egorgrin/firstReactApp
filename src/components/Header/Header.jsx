import s from './Header.module.css';
import logoBg from '../../assets/img/logo_bg.png';
import logoFace from '../../assets/img/logo__face.png';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import ava from '../../assets/img/ava.png';
import {signOut} from '../../redux/reducers/auth_reducer';

const Header = () => {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.auth);
  let isAuth = user.isAuth

  const handleClick = async (e) => {
    localStorage.removeItem('token');
    dispatch(signOut({
      user: {},
      isAuth: false,
    }));
  };

  return (
      <header className={s.wrapper}>
        <div className={s.logo_container}>
          <NavLink to="/">
            <img src={logoBg} alt="" className={s.logoBg}/>
            <img src={logoFace} alt="" className={s.logoFace}/>
          </NavLink>
        </div>
        <div className={s.title}>
          <h1>FIRST REACT APP</h1>
        </div>
        <div
            className={s.login_container}
            onClick={handleClick}
        >
          {isAuth &&
              <div className={s.login_item}>
                <div className={s.ava_container}>
                  {user.avatar
                      ? <img src={user.avatar} alt=""/>
                      : <img src={ava} alt=""/>
                  }
                </div>
                <span>Log out</span>
              </div>
          }
        </div>

      </header>
  );
};

export default Header;
