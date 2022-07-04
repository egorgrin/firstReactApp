import Post from './Post/Post';
import css from './Posts.module.css';

function Posts() {
    return (
        <div className={css.wrapper}>
            <div className={css.add}>
                <div className={css.textarea}><textarea name="" id="" cols="30" rows="10" placeholder='Type your text here...'></textarea></div>
                <div className={css.button}><button id='addPostBtn'>Add Post</button></div>
            </div>
            <div className={css.posts}>
                <Post text = 'Lorem ipsum'/>
            </div>
        </div>
    );
}


export default Posts;
