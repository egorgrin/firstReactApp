import s from './UsersList.module.css';
import UserSelector from './UserSelector/UserSelector';

const UsersList = ({friends}) => {
  let userSelectors = friends.map((friend) => (
      <UserSelector friend={friend} key={friend.id}/>
  ));
  return (
      <div className={s.wrapper}>
        <div className={s.list}>
          {userSelectors}
        </div>
      </div>
  );
}

export default UsersList