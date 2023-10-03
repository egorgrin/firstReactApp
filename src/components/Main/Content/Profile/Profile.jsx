import s from './Profile.module.css';
import ava from '../../../../assets/img/ava.png';
import Feed from './Feed/Feed.jsx';

const Profile = ({currentUser, friends, users}) => {
  return (
      <div className={s.wrapper_container}>
        <div className={s.wrapper}>
          <div className={s.aside}>
            <div className={s.sliding_inner}>
              <img className={s.avatar} src={ava} alt=""/>
              <div className={s.friends_widget_wrapper}>
                <h3 className={s.friends_widget_title}>
                  Friends {friends.length}
                </h3>
                <div className={s.friends_widget}>
                  {friends.map((friend) => (
                      <div className={s.friends_widget_item}>
                        <img src={ava} alt=""/>
                        <span>{friend.name}</span>
                      </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className={s.main}>
            <div className={s.data}>
              <img className={s.avatar_mobile} src={ava} alt=""/>
              <div className={`${s.text_data} ${s.text_data_left}`}>
                <p>Name:</p>
                <p>Date of Birth:</p>
                <p>Country:</p>
              </div>
              <div className={`${s.text_data} ${s.text_data_right}`}>
                <p>
                  {`${currentUser.firstName} ${currentUser.lastName}`}
                </p>
                <p>{currentUser.dob}</p>
                <p>{currentUser.origin}</p>
                <p>{currentUser.country}</p>
              </div>

              <div className={`${s.friends} ${s.stats_item}`}>
                <span className={`${s.stats_count}`}>{friends.length}</span>
                <span className={`${s.stats_category}`}>friends</span>
              </div>
              <div className={`${s.followers} ${s.stats_item}`}>
                <span className={`${s.stats_count}`}>999</span>
                <span className={`${s.stats_category}`}>followers</span>
              </div>
              <div className={`${s.photos} ${s.stats_item}`}>
                <span className={`${s.stats_count}`}>999</span>
                <span className={`${s.stats_category}`}>photos</span>
              </div>
              <div className={`${s.shorts} ${s.stats_item}`}>
                <span className={`${s.stats_count}`}>999</span>
                <span className={`${s.stats_category}`}>shorts</span>
              </div>
            </div>

            <Feed/>
          </div>
        </div>
      </div>

  );
};

export default Profile;
