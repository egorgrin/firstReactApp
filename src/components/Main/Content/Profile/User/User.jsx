import s from "./User.module.css";
import ava from "../../../../../img/ava.png";

import Feed from "./Feed/Feed.jsx";
import FriendsWidgetItem from "./FriendsWiget/FriendsWidgetItem";

const User = ({ user, friends, userInput, dispatch }) => {
  let userFriends = friends.map((friend) => (
    <FriendsWidgetItem userName={friend.name} key={friend.id} />
  ));
  return (
    <div className={s.wrapper}>
      <div className={s.aside}>
        <div className={s.sliding_inner}>
          <img className={s.avatar} src={ava} alt="" />
          <div className={s.friends_widget_wrapper}>
            <h3 className={s.friends_widget_title}>
              Friends {userFriends.length}
            </h3>
            <div className={s.friends_widget}>
              {userFriends}
              {userFriends}
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
              {user.name} {user.lastName}
            </p>
            <p>{user.dob}</p>
            <p>{user.origin}</p>
            <p>{user.education}</p>
            <p>GitHub</p>
          </div>

          <div className={`${s.friends} ${s.stats_item}`}>
            <span className={`${s.stats_count}`}>{userFriends.length}</span>
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

        <Feed
            userInput={userInput}
            dispatch={dispatch}
        />
      </div>
    </div>
  );
};

export default User;
