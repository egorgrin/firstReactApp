import  pt  from './Post.module.css';


function Post() {
    return (
        <div className={pt.wrapper}>
            <div className={pt.post}>
                <div className={pt.imgContainer}><img src="http://images2.fanpop.com/images/photos/5900000/Randomness-random-5997130-1280-800.jpg" alt="" /></div>
                <div className={pt.description}><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, ipsa laboriosam? Necessitatibus animi molestias, voluptatem ea alias quasi labore eum? Eum voluptas at, architecto provident rem quo nobis aperiam cupiditate!</div></div>
            </div>
            <div className={pt.actionWrapper}>
                <div className={pt.action}>
                    <div className={`${pt.button} ${pt.actionLike}`}>Like</div>
                    <div className={`${pt.button} ${pt.actionDislike}`}>Dislike</div>
                </div>
            </div>
        </div>
    );
}

export default Post;
