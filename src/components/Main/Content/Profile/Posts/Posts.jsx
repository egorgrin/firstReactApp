import s from './Posts.module.css';
import Post from './Post/Post.jsx';

const Posts = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.add}>
        <div className={s.textarea}>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Type your text here..."
          ></textarea>
        </div>
        <div id="addPostBtn" className={s.button}>
          Add Post
        </div>
      </div>
      <div className={s.posts}>
        <Post text="Lorem ipsum" />
      </div>
    </section>
  );
};

export default Posts;
