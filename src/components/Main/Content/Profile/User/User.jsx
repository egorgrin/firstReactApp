import s from './User.module.css';

import { Parallax } from 'react-parallax';
import cover from '../../../../../img/cover.webp';

import Posts from './Posts/Posts.jsx';

const User = (props) => {
  return (
    <div className={s.wrapper}>
      <Parallax className={s.cover} bgImage={cover} strength={400}></Parallax>
      <div className={s.profile_data}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
          alt=""
        />
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
