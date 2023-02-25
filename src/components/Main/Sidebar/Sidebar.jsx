import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <aside className={s.wrapper}>
      <nav>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? `${s.active}` : "")}
            to="/profile"
          >
            <div className={s.item}>
              <div className={s.icon}>
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className={s.link}>Profile</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? `${s.active}` : "")}
            to="/messages"
          >
            <div className={s.item}>
              <div className={s.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className={s.link}>Messages</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? `${s.active}` : "")}
            to="/news"
          >
            <div className={s.item}>
              <div className={s.icon}>
                <FontAwesomeIcon icon={faNewspaper} />
              </div>
              <div className={s.link}>News</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? `${s.active}` : "")}
            to="/music"
          >
            <div className={s.item}>
              <div className={s.icon}>
                <FontAwesomeIcon icon={faMusic} />
              </div>
              <div className={s.link}>Music</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(navData) => (navData.isActive ? `${s.active}` : "")}
            to="/settings"
          >
            <div className={s.item}>
              <div className={s.icon}>
                <FontAwesomeIcon icon={faGear} />
              </div>
              <div className={s.link}>Settings</div>
            </div>
          </NavLink>
        </li>
      </nav>
    </aside>
  );
};

export default Sidebar;
