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
          element={<Messages dialogs={props.state.dialogs} />}
        />
        <Route
          path="/profile/*"
          element={<Profile friends={props.state.user.friends} />}
        />
      </Routes>
    </section>
  );
};

export default Content;
