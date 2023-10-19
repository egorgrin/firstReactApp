import s from './App.module.css';
import Main from './components/Main/Main.jsx';
import Header from './components/Header/Header.jsx';
import Auth from './components/Auth/Auth';
import * as auth_thunks from './redux/thunk/auth_thunks';
import {useNavigate} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';

const App = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  let auth = useSelector((state) => state.auth.data);
  let isAuth = useSelector((state) => state.auth.isAuth);
  // console.log(user.id);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(auth_thunks.checkAuth());
    }

  }, []);

  useEffect(() => {
    if (isAuth) {
      navigate(`/profile/${auth.id}`);
    } else {
      navigate(`/auth`);
    }
  }, [isAuth]);

  return (

      <div className={s.background}>
        <div className={s.wrapper}>
          <Header/>
          {isAuth
              ? <Main/>
              : <Auth/>
          }
        </div>
      </div>
  );
};

export default App;
