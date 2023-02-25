import s from "./Header.module.css";
// import logo from '../../img/logo.svg';
import logoBg from "../../img/logo_bg.png";
import logoFace from "../../img/logo__face.png";

const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className={s.logo_container}>
        <a href="/">
          <img src={logoBg} alt="" className={s.logoBg} />
          <img src={logoFace} alt="" className={s.logoFace} />
        </a>
      </div>
      <div className={s.title}>
        <h1>FIRST REACT APP</h1>
      </div>
    </header>
  );
};

export default Header;
