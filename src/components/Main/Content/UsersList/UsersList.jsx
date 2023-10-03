import s from './UsersList.module.css';
import UserSelector from './UserSelector/UserSelector';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getUsers} from '../../../../redux/actions/users';

const UsersList = ({users, currentUser}) => {
  const dispatch = useDispatch();

  let me = currentUser;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);


  return (
      <div className={s.wrapper}>
        <div className={s.list}>
          {
            users.map(user => (
                <UserSelector me={me} user={user} key={user.id}/>
            ))
          }
        </div>
      </div>
  );
};

export default UsersList;