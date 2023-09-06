import React, {useState} from 'react';
import s from './Input.module.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperclip, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

const Input = ({ userInput, send, handleChange }) => {

  let textareaRef = React.createRef();

  return (
      <div className={`${s.input}`}>
        <button className={s.attachment}>
          <FontAwesomeIcon icon={faPaperclip}/>
        </button>
        <textarea
            // style={{height: height}}
            ref={textareaRef}
            onChange={handleChange}
            placeholder="Type your message..."
            value={userInput}
        />
        <button className={s.send} onClick={send}>
          <FontAwesomeIcon icon={faPaperPlane}/>
        </button>
      </div>
  );
}

export default Input;
