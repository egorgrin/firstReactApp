import s from './Profile.module.css';
import Cover from './Cover/Cover.jsx';
import Person from '../Person/Person.jsx';
import Posts from './Posts/Posts.jsx';

const Profile = () => {
  return (
    <section className={s.wrapper}>
      <Cover />
      <Person firstName={`Egor`} lastName={'Gurinovich'} dob={'25/06/1992'} />
      <Posts />
    </section>
  );
};

export default Profile;
