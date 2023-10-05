import s from "./Feed.module.css";

import Post from "./Post/Post.jsx";
import TextArea from "../../../../UI/Textarea/Textarea";

const Feed = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.input}>
        <TextArea externalClass={s.input} />
      </div>
      <div className={s.feed}>
        <Post
          name={`Vi`}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, sem a posuere blandit, velit.`}
        />
        <Post
          name={`Johnny Silverhand`}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit, sem a posuere blandit, velit.`}
        />
      </div>
    </div>
  );
};

export default Feed;
