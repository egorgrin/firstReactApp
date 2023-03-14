import s from "./Meta.module.css";

const Meta = (props) => {
  return (
    <span className={s.wrapper}>
      {props.date ? (
        <span className={`${s.date} ${props.externalClass}`}>{props.date}</span>
      ) : (
        ``
      )}
      &nbsp;
      {props.time ? (
        <span className={`${s.time} ${props.externalClass}`}>{props.time}</span>
      ) : (
        ``
      )}
    </span>
  );
};

export default Meta;
