import s from "./User.module.css";
import ava from "../../../../../img/ava.png";

import Feed from "./Feed/Feed.jsx";
import FriendsWidgetItem from "./FriendsWiget/FriendsWidgetItem";

const User = (props) => {
  let friends = props.friends.map((friend) => (
    <FriendsWidgetItem userName={friend.name} key={friend.id} />
  ));
  return (
    <div className={s.wrapper}>
      <div className={s.aside}>
        <div className={s.sliding_inner}>
          <img className={s.avatar} src={ava} alt="" />
          <div className={s.friends_widget_wrapper}>
            <h3 className={s.friends_widget_title}>
              Friends {props.friends.length}
            </h3>
            <div className={s.friends_widget}>
              {friends}
              {friends}
            </div>
          </div>
        </div>
      </div>
      <div className={s.main}>
        <div className={s.data}>
          <div className={`${s.text_data} ${s.text_data_left}`}>
            <p>Name:</p>
            <p>Date of Birth:</p>
            <p>City:</p>
            <p>Education:</p>
            <p>WebSite:</p>
          </div>
          <div className={`${s.text_data} ${s.text_data_right}`}>
            <p>
              {props.firstName} {props.lastName}
            </p>
            <p>{props.dob}</p>
            <p>Orenburg</p>
            <p>Self-thought</p>
            <p>GitHub</p>
          </div>

          <div className={`${s.friends} ${s.stats_item}`}>
            <span className={`${s.stats_count}`}>{props.friends.length}</span>
            <span className={`${s.stats_category}`}>friends</span>
          </div>
          <div className={`${s.followers} ${s.stats_item}`}>
            <span className={`${s.stats_count}`}>999</span>
            <span className={`${s.stats_category}`}>followers</span>
          </div>
          <div className={`${s.photos} ${s.stats_item}`}>
            <span className={`${s.stats_count}`}>999</span>
            <span className={`${s.stats_category}`}>photos</span>
          </div>
          <div className={`${s.shorts} ${s.stats_item}`}>
            <span className={`${s.stats_count}`}>999</span>
            <span className={`${s.stats_category}`}>shorts</span>
          </div>
        </div>

        <Feed />
      </div>
    </div>
  );
};

export default User;
