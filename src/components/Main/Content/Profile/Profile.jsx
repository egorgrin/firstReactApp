import s from "./Profile.module.css";
import UserContainer from './User/UserContainer';

const Profile = () => {
  return (
    <div className={s.wrapper}>
      <UserContainer />
    </div>
  );
};

export default Profile;
