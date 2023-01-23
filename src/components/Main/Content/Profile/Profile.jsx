import s from './Profile.module.css';
import Posts from './Posts/Posts.jsx';
import Person from '../Person/Person.jsx';

const Profile = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.wallpaper}>
        <img
          src="https://i.pinimg.com/originals/47/fb/b6/47fbb68a37492662cd74715d7787a212.jpg"
          alt=""
        />
      </div>
      <Person firstName={`Egor`} lastName={'Gurinovich'} dob={'25/06/1992'} />
      <Posts />
    </section>
  );
};

export default Profile;
