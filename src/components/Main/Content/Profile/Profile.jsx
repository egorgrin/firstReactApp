import s from './Profile.module.css';

import User from './User/User.jsx';

const Profile = () => {
  return (
    <div className={s.wrapper}>
      <User firstName={`Egor`} lastName={'Gurinovich'} dob={'25/06/1992'} />
    </div>
  );
};

export default Profile;
