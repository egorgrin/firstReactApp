import s from './Person.module.css';

const Person = (props) => {
  return (
    <div className={s.container}>
      <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
      <div className={s.info}>
        <h2>
          Name: {props.firstName} {props.lastName}
        </h2>
        <p>
          <b>Date of Birth:</b> {props.dob}
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
