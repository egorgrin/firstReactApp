import s from "./Content.module.css";

import Messages from "./Messages/Messages.jsx";
import Profile from "./Profile/Profile.jsx";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <section className={s.wrapper}>
      <Routes>
        <Route path="/messages/*" element={<Messages />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
    </section>
  );
};

export default Content;
