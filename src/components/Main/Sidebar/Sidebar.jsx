import s from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={s.wrapper}>
      <nav className={s.nav}>
        <li>
          <a href="#">Profile</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Music</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
