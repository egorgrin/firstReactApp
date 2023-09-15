import s from './UsersList.module.css';
import UserSelector from './UserSelector/UserSelector';

const UsersList = ({friends}) => {

  return (
      <div className={s.wrapper}>
        <div className={s.list}>
          {
            friends.map(friend => (
              <UserSelector friend={friend} key={friend.id}/>
          ))
          }
        </div>
      </div>
  );
}

export default UsersList