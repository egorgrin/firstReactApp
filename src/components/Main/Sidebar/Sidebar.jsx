import css from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={css.sidebar}>
      <div className={css.menu}>
        <ul>
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
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
