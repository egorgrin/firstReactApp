import React from 'react';
// import {useState} from 'react';
import {updateInputValue} from '../../../redux/reducers/input';
import Textarea from './Textarea';
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

    dispatch(updateInputValue(event.target.value));
  };

  const send = () => {
    dispatch(updateInputValue(``));
    // setHeight(50);
  };

  return (
      <Textarea
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
      dispatch(updateInputValue(``));
    },

    handleChange: (event) => {
      dispatch(updateInputValue(event.target.value));
    },
  };
};

const TextareaContainer = connect(mapStateToProps, mapDispatchToProps)(Textarea);

export default TextareaContainer;
