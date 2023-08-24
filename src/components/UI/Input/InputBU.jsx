import React from 'react';
import s from './Input.module.css';
import {useState} from 'react';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperclip, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {updateInputAC} from '../../../redux/input-reducer';

const Input = ({dispatch, actionCreator, recipientId, userInput}) => {

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

  let textareaRef = React.createRef();

  const send = () => {
    dispatch(actionCreator(userInput, recipientId));
    dispatch(updateInputAC(``));
    setHeight(50);
  };

  return (
      <div className={`${s.input}`}>
        <button className={s.attachment}>
          <FontAwesomeIcon icon={faPaperclip}/>
        </button>
        <textarea
            style={{height: height}}
            ref={textareaRef}
            onChange={onChange}
            placeholder="Type your message..."
            value={userInput}
        />
        <button className={s.send} onClick={send}>
          <FontAwesomeIcon icon={faPaperPlane}/>
        </button>
      </div>
  );
}