import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className={s.logo}>
        <h1>Logo</h1>
      </div>
    </header>
  );
};

export default Header;
