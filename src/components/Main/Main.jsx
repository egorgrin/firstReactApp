import css from './Main.module.css';

import Profile from "./Profile/Prolfile";
import Sidebar from "./Sidebar/Sidebar";

function Main() {
    return (
    <div className={css.main}>
        <Sidebar />
        <Profile />
    </div>
    );
}

export default Main;