import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.body}>
        <div className={s.imgContainer}>
          <img
            src="http://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg"
            alt=""
          />
        </div>
        <div className={s.content}>
          <div>{props.text}</div>
        </div>
      </div>
      <div className={s.actionWrapper}>
        <div className={s.action}>
          <div className={`${s.button} ${s.actionLike}`}>Like</div>
          <div className={`${s.button} ${s.actionDislike}`}>Dislike</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
