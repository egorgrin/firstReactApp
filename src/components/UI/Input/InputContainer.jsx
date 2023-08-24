import React from 'react';
import {useState} from 'react';
import {updateInputAC} from '../../../redux/input-reducer';
import Input from './Input';

const InputContainer = ({ dispatch, actionCreator, userInput, recipientId }) => {

  /* Resize on large text prompt */
  const [height, setHeight] = useState(50);
  /*--------------------------*/

  const onChange = (event) => {
    /* Resize on large text prompt */
    if (event.target.value === '') {
      setHeight(50);
    } else {
      setHeight(Math.min(event.target.scrollHeight, 200));
    }
    /*--------------------------*/

    dispatch(updateInputAC(event.target.value));
  };

  const send = () => {
    dispatch(actionCreator(userInput, recipientId));
    dispatch(updateInputAC(``));
    setHeight(50);
  };

  return (
      <Input onChange={onChange}
             send={send}

             userInput={userInput}
             recipientId={recipientId}

             height={height}
      />

  );
}

export default InputContainer;
