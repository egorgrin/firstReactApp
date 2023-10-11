import s from './App.module.css';
import Main from './components/Main/Main.jsx';
import Header from './components/Header/Header.jsx';
import {BrowserRouter} from 'react-router-dom';
import Auth from './components/Auth/Auth';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {checkUser} from './redux/actions/auth';

const App = () => {
  const dispatch = useDispatch();
  let isAuth = useSelector((state) => state.user.isAuth);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkUser());
    }

  }, [dispatch]);

  return (
      <BrowserRouter>
        <div className={s.background}>
          <div className={s.wrapper}>
            <Header/>
            {isAuth
                ? <Main/>
                : <Auth/>
            }
          </div>
        </div>
      </BrowserRouter>
  );
};

export default App;
