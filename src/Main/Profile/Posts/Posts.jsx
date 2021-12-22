import Post from './Post/Post';
import po from './Posts.module.css';

function Posts() {
    return (
        <div className={po.wrapper}>
            <div className={po.add}>
                <div className={po.textarea}><textarea name="" id="" cols="30" rows="10"></textarea></div>
                <div className={po.button}><button>Add Post</button></div>
            </div>
            <div className={po.posts}>
                <Post />
            </div>
        </div>
    );
}

export default Posts;
