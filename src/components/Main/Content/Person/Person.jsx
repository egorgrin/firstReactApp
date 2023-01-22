import s from './Person.module.css';

const Person = (props) => {
  return (
    <div className={s.container}>
      <div>
        <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
      </div>
      <div className={s.info}>
        <h2>Name: Egor Gurinovich</h2>
        <p>
          <b>Date of Birth:</b> 25/06/1992
        </p>
        <p>
          <b>City:</b> Orenburg
        </p>
        <p>
          <b>Education:</b> Self-thought
        </p>
        <p>
          <b>WebSite:</b> GitHub
        </p>
      </div>
    </div>
  );
};

export default Person;
