import s from './FriendsList.module.css';
import FriendSelector from './FriendSelector/FriendSelector';

const FriendsList = ({friends}) => {
  let friendSelectors = friends.map((friend) => (
      <FriendSelector friend={friend} key={friend.id}/>
  ));
  return (
      <div className={s.wrapper}>
        <div className={s.list}>
          {friendSelectors}
        </div>
      </div>
  );
}

export default FriendsList