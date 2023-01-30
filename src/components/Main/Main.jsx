import s from './Main.module.css';

import Content from './Content/Content.jsx';
import Sidebar from './Sidebar/Sidebar.jsx';

const Main = () => {
  return (
    <main className={s.wrapper}>
      <Sidebar />
      <Content />
    </main>
  );
};

export default Main;
