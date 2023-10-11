import s from './Users.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {getFriends, getUsers} from '../../../../redux/actions/users';
import {useLocation, useParams} from 'react-router-dom';
import UserSelector from './UserSelector/UserSelector';

const Users = ({currentUser}) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users)

  let url = useLocation().pathname;

  switch (url) {
    case '/users': {
      useEffect(() => {
        dispatch(getUsers());
      }, []);
      break
    }
    case '/friends': {
      useEffect(() => {
        dispatch(getUsers());
      }, []);
      break
    }
    default: {
      useEffect(() => {
        dispatch(getUsers());
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