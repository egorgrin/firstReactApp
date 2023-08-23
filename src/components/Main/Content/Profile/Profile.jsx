import s from "./Profile.module.css";
import User from "./User/User.jsx";

const Profile = (props) => {
  return (
    <div className={s.wrapper}>
      <User
          user={props.user}
          friends={props.friends}
          userInput={props.userInput}
          dispatch={props.dispatch} />
    </div>
  );
};

export default Profile;
