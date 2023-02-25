import s from "./Header.module.css";
// import logo from '../../img/logo.svg';
import logoBg from "../../img/logo_bg.png";
import logoFace from "../../img/logo__face.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className={s.logo_container}>
        <NavLink to="/profile">
          <img src={logoBg} alt="" className={s.logoBg} />
          <img src={logoFace} alt="" className={s.logoFace} />
        </NavLink>
      </div>
      <div className={s.title}>
        <h1>FIRST REACT APP</h1>
      </div>
    </header>
  );
};

export default Header;
