import css from './Post.module.css';

function Post(props) {
  return (
    <div className={css.wrapper}>
      <div className={css.post}>
        <div className={css.imgContainer}>
          <img
            src="http://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg"
            alt=""
          />
        </div>
        <div className={css.content}>
          <div>{props.text}</div>
        </div>
      </div>
      <div className={css.actionWrapper}>
        <div className={css.action}>
          <div className={`${css.button} ${css.actionLike}`}>Like</div>
          <div className={`${css.button} ${css.actionDislike}`}>Dislike</div>
        </div>
      </div>
    </div>
  );
}

export default Post;
