import React, {useEffect, useState} from 'react';
import s from './Auth.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../../../../redux/actions/auth';
import Input from '../../../UI/Input/Input';


const Auth = () => {
  const username = useSelector((state) => state.input.username);
  const password = useSelector((state) => state.input.password);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(auth(username, password));
  };

  return (
      <div className={s.wrapper}>
        <form
            className={s.form}
            autoComplete="off"
            noValidate={true}
            onSubmit={handleSubmit}
        >
          <h2>Please log in</h2>

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
