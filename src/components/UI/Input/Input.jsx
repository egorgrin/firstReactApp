import React from 'react';
import s from './Input.module.css';
import {useState} from 'react';


import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperclip, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import {updateInputAC} from '../../../redux/input-reducer';

function Input({dispatch, actionCreator, recipient, inputPrompt}) {

  /* Resize on large text prompt */

  // const [value, setValue] = useState('');
  const [height, setHeight] = useState(50);
  /*--------------------------*/

  /*  const synchronizeInputContent =  (inputContent) => {
      return null;
    };*/

  const onChange = (event) => {
    /* Resize on large text prompt */

    // setValue(event.target.value);
    if (event.target.value === '') {
      setHeight(50);
    } else {
      setHeight(Math.min(event.target.scrollHeight, 200));
    }
    /*--------------------------*/

    dispatch(updateInputAC(event.target.value));
  };

  let textareaRef = React.createRef();

  const sendMsg = () => {
    dispatch(actionCreator(recipient, inputPrompt));
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
            value={inputPrompt}
        />
        <button className={s.send} onClick={sendMsg}>
          <FontAwesomeIcon icon={faPaperPlane}/>
        </button>
      </div>
  );
}

export default Input;
