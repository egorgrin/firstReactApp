import s from './UsersList.module.css';
import UserSelector from './UserSelector/UserSelector';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getUsers} from '../../../../redux/actions/users';

const UsersList = ({users}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // console.log(users);

  return (
      <div className={s.wrapper}>
        <div className={s.list}>
          {
            users.map(user => (
                <UserSelector user={user} key={user._id}/>
            ))
          }
        </div>
      </div>
  );
};

export default UsersList;