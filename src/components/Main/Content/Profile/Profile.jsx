import s from "./Profile.module.css";
import User from "./User/User.jsx";

const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <User user={user} />
    </div>
  );
};

export default Profile;
