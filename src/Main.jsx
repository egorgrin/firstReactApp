import m from './Main.module.css';

import Content from "./Content";
import Sidebar from "./Sidebar";

function Main() {
    return (
    <div className={m.main}>
        <Sidebar />
        <Content />
    </div>
    );
}

export default Main;