import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={s.wrapper}>
      <nav className={s.nav}>
        <li className={s.active}>
          <a href="/profile">Profile</a>
        </li>
        <li>
          <a href="/messages">Messages</a>
        </li>
        <li>
          <a href="/news">News</a>
        </li>
        <li>
          <a href="/music">Music</a>
        </li>
        <li>
          <a href="/settings">Settings</a>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
