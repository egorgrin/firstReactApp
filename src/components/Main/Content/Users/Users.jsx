import s from './Users.module.css';
import UserSelector from '../../../UI/UserSelector/UserSelector';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import {getFriends, getUsers} from '../../../../redux/actions/users';
import {useLocation, useParams} from 'react-router-dom';

const Users = ({users, currentUser}) => {
  const dispatch = useDispatch();

  let url = useLocation().pathname;

  switch (url) {
    case '/users': {
      useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);
      break
    }
    case '/friends': {
      useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);
      break
    }
    default: {
      useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]);
      break
    }
  }

  return (
      <div className={s.wrapper}>
        <div className={s.list}>
          {
            users.map(user => (
                <UserSelector user={user} key={user.id}/>
            ))
          }
        </div>
      </div>
  );
};

export default Users;