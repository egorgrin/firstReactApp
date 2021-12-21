import  c  from './Content.module.css';

function Content() {
    return (
        <section className={c.content}>
            <div className={c.profile}>
                <div className={c.wallpaper}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg/1200px-NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg"
                        alt=""
                    />
                </div>
                <div className={c.person}>
                    <div className={c.logo}>
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                            alt=""
                        />
                    </div>
                    <div className={c.info}>
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
            </div>
        </section>
    );
}

export default Content;
