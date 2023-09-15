import s from './Content.module.css';

import Profile from './Profile/Profile.jsx';
import {Route, Routes} from 'react-router-dom';
import MessagesContainer from './Messages/MessagesContainer';
import FriendsListContainer from './FriendsList/FriendsListContainer';
import UsersListContainer from './UsersList/UsersListContainer';

const Content = () => {
  return (
      <section className={s.wrapper}>
        <Routes>
          <Route
              path="/profile/*"
              element={
                <Profile />
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
                <FriendsListContainer />
              }
          />
          <Route
              path="/users/*"
              element={
                <UsersListContainer />
              }
          />
        </Routes>
      </section>
  );
};

export default Content;
