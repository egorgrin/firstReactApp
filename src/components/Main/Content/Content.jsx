import s from "./Content.module.css";

import Messages from "./Messages/Messages.jsx";
import Profile from "./Profile/Profile.jsx";
import { Route, Routes } from "react-router-dom";

const Content = (props) => {
  return (
    <section className={s.wrapper}>
      <Routes>
        <Route
          path="/messages/*"
          element={
            <Messages user={props.state.user} addMessage={props.addMessage} />
          }
        />
        <Route
          path="/profile/*"
          element={<Profile user={props.state.user} />}
        />
      </Routes>
    </section>
  );
};

export default Content;
