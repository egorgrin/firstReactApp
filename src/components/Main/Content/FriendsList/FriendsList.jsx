import s from './FriendsList.module.css';
import FriendSelector from './FriendSelector/FriendSelector';

const FriendsList = ({friends}) => {
  return (
      <div className={s.wrapper}>
        <div className={s.list}>
          {friends.map((friend) => (
              <FriendSelector friend={friend} key={friend.id}/>
          ))}
        </div>
      </div>
  );
}

export default FriendsList