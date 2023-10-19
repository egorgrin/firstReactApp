import React, {useState} from 'react';
import s from './Input.module.css';

import {updateInput, updateInputValue} from '../../../redux/reducers/input_reducer';
import {useDispatch, useSelector} from 'react-redux';

const Input = ({inputName, placeholder}) => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input[inputName] || '');

  const handleChange = (e) => {
    dispatch(updateInputValue(inputName, e.target.value));
  };

  return (
      <input
          onChange={handleChange}
          placeholder={placeholder}
          className={`${s.input}`}
          value={inputValue}
      />
  );
};

export default Input;
