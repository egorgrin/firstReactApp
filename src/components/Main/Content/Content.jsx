import s from './Content.module.css';

import {Route, Routes} from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import UsersContainer from './Users/UsersContainer';
import UsersConstructor from './UserConstructor/UserContructor';
import ProfileContainer from './Profile/ProfileContainer';
import FriendsContainer from './Users/Friends/FriendsContainer';

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
                <FriendsContainer />
              }
          />
          <Route
              path="/users/*"
              element={
                <UsersContainer />
              }
          />
        </Routes>
      </section>
  );
};

export default Content;
