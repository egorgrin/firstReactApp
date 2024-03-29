import s from "./Post.module.css";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ava from "../../../../../../assets/img/ava.png";
import p200 from "../../../../../../assets/img/p200.webp";
import p400 from "../../../../../../assets/img/p400.webp";
import Meta from "../../../../../UI/Meta/Meta";

const Post = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.body}>
        <div className={s.user_info}>
          <div className={s.user_avatar}>
            <img src={ava} alt="" />
          </div>
          <div className={s.text_info}>
            <p className={s.user_name}>{props.name}</p>
            <div className={s.post_meta}>
              <Meta
                date={`Apr 21 `}
                time={`11:45 PM`}
                externalClass={s.time_published}
              />
            </div>
          </div>
        </div>
        <div className={s.content}>
          <p className={s.post_text}>{props.text}</p>
          <div className={s.media_grid}>
            <div className={s.main_img_wrapper}>
              <img className={``} src={p400} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={s.actionWrapper}>
        <div className={s.action}>
          <div className={`${s.button} ${s.actionLike}`}>
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
          <div className={`${s.button} ${s.actionDislike}`}>
            <FontAwesomeIcon icon={faThumbsDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
