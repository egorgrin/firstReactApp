import s from './Content.module.css';

import Messages from './Messages/Messages.jsx';
import Profile from './Profile/Profile.jsx';
import {Route, Routes} from 'react-router-dom';

const Content = (props) => {
  return (
      <section className={s.wrapper}>
        <Routes>
          <Route
              path="/messages/*"
              element={
                <Messages
                    friends={props.state.friends}

                    userInput={props.state.userInput}
                    dispatch={props.dispatch}/>
              }
          />
          <Route
              path="/profile/*"
              element={
                <Profile
                    user={props.state.user}
                    friends={props.state.friends}

                    userInput={props.state.userInput}
                    dispatch={props.dispatch}/>}
          />
        </Routes>
      </section>
  );
};

export default Content;
