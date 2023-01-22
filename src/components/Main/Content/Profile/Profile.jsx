import s from './Profile.module.css';
import Posts from './Posts/Posts';
import Person from '../Person/Person';

const Profile = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.wallpaper}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg/1200px-NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg"
          alt=""
        />
      </div>
      <Person />
      <Posts />
    </section>
  );
};

export default Profile;