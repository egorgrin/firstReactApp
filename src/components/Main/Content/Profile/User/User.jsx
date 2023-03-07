import s from "./User.module.css";

// import { Parallax } from 'react-parallax';
import ava from "../../../../../img/ava.png";

import Feed from "./Feed/Feed.jsx";

const User = (props) => {
  return (
    <div className={s.wrapper}>
      {/*<div className={s.cover}></div>*/}
      <div className={s.aside}>
        <img className={s.avatar} src={ava} alt="" />
      </div>
      <div className={s.main}>
        {/*<Parallax className={s.cover} bgImage={cover} strength={400}></Parallax>*/}

        <div className={s.data}>
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
          <div className={`${s.stats}`}>
            <div className={`${s.friends} ${s.stats_item}`}>
              <span className={`${s.stats_count}`}>400</span>
              <span className={`${s.stats_category}`}>friends</span>
            </div>
            <div className={`${s.followers} ${s.stats_item}`}>
              <span className={`${s.stats_count}`}>666</span>
              <span className={`${s.stats_category}`}>followers</span>
            </div>
            <div className={`${s.photos} ${s.stats_item}`}>
              <span className={`${s.stats_count}`}>999</span>
              <span className={`${s.stats_category}`}>photos</span>
            </div>
            <div className={`${s.shorts} ${s.stats_item}`}>
              <span className={`${s.stats_count}`}>333</span>
              <span className={`${s.stats_category}`}>shorts</span>
            </div>
          </div>
        </div>

        <Feed />
      </div>
    </div>
  );
};

export default User;
