import s from './Content.module.css';

import Profile from './Profile/Profile.jsx';
import {Route, Routes} from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';

const Content = (props) => {
  return (
      <section className={s.wrapper}>
        <Routes>
          <Route
              path="/messages/*"
              element={
                <MessagesContainer />
              }
          />
          <Route
              path="/profile/*"
              element={
                <Profile />}
          />
        </Routes>
      </section>
  );
};

export default Content;
