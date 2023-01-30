import s from './Content.module.css';

import Profile from './Profile/Profile.jsx';

const Content = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.left_side}></div>
      <div className={s.right_side}>
        /*<Profile />*/
      </div>
    </section>
  );
};

export default Content;
