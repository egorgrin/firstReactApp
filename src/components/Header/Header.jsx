import s from './Header.module.css';
import logoBg from '../../assets/img/logo_bg.png';
import logoFace from '../../assets/img/logo__face.png';
import {NavLink} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';
import {useSelector} from 'react-redux';
import ava from '../../assets/img/ava.png';

const Header = () => {
  let admin = useSelector((state) => state.admin);

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
        <div className={s.login_container}>
          {admin &&
              <div className={s.login_item}>
                <div className={s.ava_container}>
                  {admin.avatar !== ''
                      ? <img src={admin.avatar} alt=""/>
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
