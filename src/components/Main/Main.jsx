import s from "./Main.module.css";

import Content from "./Content/Content.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";

const Main = (props) => {
  return (
    <main className={s.wrapper}>
      <Sidebar />
      <Content state={props.state} />
    </main>
  );
};

export default Main;
