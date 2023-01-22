import s from './Main.module.css';
import Content from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

const Main = () => {
  return (
    <section className={s.wrapper}>
      <Sidebar />
      <Content />
    </section>
  );
};

export default Main;
