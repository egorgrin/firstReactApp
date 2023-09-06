import React from 'react';
// import {useState} from 'react';
import {updateInputAC} from '../../../redux/input-reducer';
import Input from './Input';
import {connect} from 'react-redux';

const OldInputContainer = ({dispatch, actionCreator, userInput, recipientId}) => {

  /* Resize on large text prompt */
  // const [height, setHeight] = useState(50);
  /*--------------------------*/

  const handleChange = (height, setHeight, event) => {
    /* Resize on large text prompt */
    // if (event.target.value === '') {
    //   setHeight(50);
    // } else {
    //   setHeight(Math.min(event.target.scrollHeight, 200));
    // }
    /*--------------------------*/

    dispatch(updateInputAC(event.target.value));
  };

  const send = () => {
    dispatch(updateInputAC(``));
    // setHeight(50);
  };

  return (
      <Input
          // recipientId={recipientId}
      />

  );
};

const mapStateToProps = (state) => {
  return {
    userInput: state.userInput,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    send: () => {
      dispatch(updateInputAC(``));
    },

    handleChange: (event) => {
      dispatch(updateInputAC(event.target.value));
    },
  };
};

const InputContainer = connect(mapStateToProps, mapDispatchToProps)(Input);

export default InputContainer;
