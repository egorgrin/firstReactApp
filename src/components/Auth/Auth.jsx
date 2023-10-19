import React, {useEffect, useState} from 'react';
import s from './Auth.module.css';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../UI/Input/Input';
import * as auth_thunks from '../../redux/thunk/auth_thunks';


const Auth = () => {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.input.username);
  const password = useSelector((state) => state.input.password);

  let user = useSelector((state) => state.auth.data);
  // console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await dispatch(auth_thunks.auth(username, password));
    localStorage.setItem('token', token);
  };

  return (
      <div className={s.wrapper}>
        <form
            className={s.form}
            autoComplete="on"
            onSubmit={handleSubmit}
        >
          <h2>Please sign in</h2>

          <div className={s.fields}>
            <div className={s.field_block}>
              <Input
                  inputName="username"
                  placeholder="Username"
              />
            </div>
            <div className={s.field_block}>
              <Input
                  inputName="password"
                  placeholder="Password"
              />
            </div>

          </div>

          <div className={s.btn}>
            <button className={s.send} type="submit">
              Log in
            </button>
          </div>
        </form>
      </div>
  );
};

export default Auth;
