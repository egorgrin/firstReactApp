import s from "./FriendsWidgetItem.module.css";
import ava from "../../../../../../assets/img/ava.png";

const FriendsWidgetItem = (props) => {
  return (
    <div className={s.wrapper}>
      <img src={ava} alt="" />
      <span>{props.userName}</span>
    </div>
  );
};

export default FriendsWidgetItem;
