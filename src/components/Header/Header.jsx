import s from "./Header.module.css";
import logoBg from "../../assets/img/logo_bg.png";
import logoFace from "../../assets/img/logo__face.png";
import { NavLink } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faReact} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className={s.logo_container}>
        <NavLink to="/">
          <img src={logoBg} alt="" className={s.logoBg} />
          <img src={logoFace} alt="" className={s.logoFace} />
        </NavLink>
      </div>
      <div className={s.title}>
        <h1>FIRST REACT APP</h1>
      </div>
      <div className={s.login_container}>
        <NavLink to="/auth">
          <div className={s.login_item}>
            <FontAwesomeIcon icon={faReact} className={s.login_icon} />
            <span>Login</span>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
