import s from './Content.module.css';

import Messages from './Messages/Messages.jsx';
import Profile from './Profile/Profile.jsx';

const Content = () => {
  return (
    <section className={s.wrapper}>
      <Messages />
      {/*<Profile />*/}
    </section>
  );
};

export default Content;
