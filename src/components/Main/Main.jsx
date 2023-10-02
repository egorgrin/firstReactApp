import s from "./Main.module.css";

import Content from "./Content/Content.jsx";
import Nav from "./Nav/Nav.jsx";

const Main = (props) => {
  return (
    <main className={s.wrapper}>
      <Nav />
      <Content />
    </main>
  );
};

export default Main;
