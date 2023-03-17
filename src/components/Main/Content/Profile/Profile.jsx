import s from "./Profile.module.css";
import User from "./User/User.jsx";

const Profile = ({ friends }) => {
  return (
    <div className={s.wrapper}>
      <User
        friends={friends}
        firstName="Egor"
        lastName="Gurinovich"
        dob="25/06/1992"
      />
    </div>
  );
};

export default Profile;
