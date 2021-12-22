import m from './Main.module.css';

import Profile from "./Profile/Prolfile";
import Sidebar from "./Sidebar/Sidebar";

function Main() {
    return (
    <div className={m.main}>
        <Sidebar />
        <Profile />
    </div>
    );
}

export default Main;