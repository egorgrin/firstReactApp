import s from "./Meta.module.css";

const Meta = (props) => {
  return (
    <div className={s.wrapper}>
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
    </div>
  );
};

export default Meta;
