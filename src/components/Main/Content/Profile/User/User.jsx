import s from "./User.module.css";

// import { Parallax } from 'react-parallax';
import ava from "../../../../../img/ava.png";

import Posts from "./Posts/Posts.jsx";

const User = (props) => {
  return (
    <div className={s.wrapper}>
      {/*<Parallax className={s.cover} bgImage={cover} strength={400}></Parallax>*/}
      <div className={s.cover}></div>
      <div className={s.data}>
        <img src={ava} alt="" />
        <div className={s.text_data}>
          <h2>
            Name: {props.firstName} {props.lastName}
          </h2>
          <p>
            <b>Date of Birth:</b> {props.dob}
          </p>
          <p>
            <b>City:</b> Orenburg
          </p>
          <p>
            <b>Education:</b> Self-thought
          </p>
          <p>
            <b>WebSite:</b> GitHub
          </p>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default User;
