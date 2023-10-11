import s from './Content.module.css';

import {Route, Routes} from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import ProfileContainer from './Profile/ProfileContainer';
import Users from './Users/Users';
import Auth from '../../Auth/Auth';

const Content = () => {
  return (
      <section className={s.wrapper}>
        <Routes>
          <Route
              path="/profile/:userId"
              element={
                <ProfileContainer />
              }
          />
          <Route
              path="/messages/*"
              element={
                <MessagesContainer />
              }
          />
          <Route
              path="/friends/*"
              element={
                <Users />
              }
          />
          <Route
              path="/users/*"
              element={
                <Users />
              }
          />
          <Route
              path="/auth/*"
              element={
                <Auth />
              }
          />
        </Routes>
      </section>
  );
};

export default Content;
