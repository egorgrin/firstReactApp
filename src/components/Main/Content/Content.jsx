import Profile from './Profile/Profile';
import s from './Content.module.css';

const Content = () => {
  return (
    <section className={s.wrapper}>
      <Profile />
    </section>
  );
};

export default Content;
