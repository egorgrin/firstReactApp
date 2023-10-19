import s from './Users.module.css';
import * as users_thunks from '../../../../redux/thunk/users_thunks';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import UserSelector from './UserSelector/UserSelector';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users)

  let url = useLocation().pathname;

  switch (url) {
    case '/users': {
      useEffect(() => {
        dispatch(users_thunks.getUsers());
      }, []);
      break
    }
    case '/friends': {
      useEffect(() => {
        dispatch(users_thunks.getUsers());
      }, []);
      break
    }
    default: {
      useEffect(() => {
        dispatch(users_thunks.getUsers());
      }, []);
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