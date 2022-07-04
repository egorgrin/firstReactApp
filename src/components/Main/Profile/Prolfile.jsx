import Posts from './Posts/Posts';
import  css  from './Profile.module.css';

function Profile() {
    return (
        <section className={css.wrapper}>
            <div className={css.profile}>
                <div className={css.wallpaper}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg/1200px-NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg"
                        alt=""
                    />
                </div>
                <div className={css.person}>
                    <div className={css.logo}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                            alt=""
                        />
                    </div>
                    <div className={css.info}>
                        <h2>Name: Egor Gurinovich</h2>
                        <p>
                            <b>Date of Birth:</b> 25/06/1992
                        </p>
                        <p>
                            <b>City:</b> Orenburg
                        </p>
                        <p>
                            <b>Education:</b> Self-thought
                        </p>
                        <p>
                            <b>WebSite:</b> GitHub
                        </p>
                    </div>
                </div>
                <Posts />
            </div>
        </section>
    );
}

export default Profile;
