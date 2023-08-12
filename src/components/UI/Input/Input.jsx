import React from 'react';
import s from './Input.module.css';
import {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPaperclip, faPaperPlane} from '@fortawesome/free-solid-svg-icons';

function Input({dispatch}) {
  // Resize on large text prompt
  const [value, setValue] = useState('');
  const [height, setHeight] = useState('50px');
  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === '') {
      setHeight('50px');
    } else {
      setHeight(Math.min(event.target.scrollHeight, 200));
    }
  };
  /*--------------------------*/


  let textareaRef = React.createRef();
  let send = () => {
    dispatch({type: `add-message`, textContent: textareaRef.current.value});
    textareaRef.current.value = ``;
  };

  return (
      <div className={`${s.input}`}>
        <button className={s.attachment}>
          <FontAwesomeIcon icon={faPaperclip}/>
        </button>
        <textarea
            // Resize on large text prompt
            onChange={handleChange}
            style={{height: height}}
            /*---------------------------*/
            ref={textareaRef}
            placeholder="Type your message..."
        />
        <button className={s.send} onClick={send}>
          <FontAwesomeIcon icon={faPaperPlane}/>
        </button>
      </div>
  );
}

export default Input;
