import s from "./Input.module.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function TextArea(props) {
  const [value, setValue] = useState("");
  const [height, setHeight] = useState("50px");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "") {
      setHeight("50px");
    } else {
      setHeight(Math.min(event.target.scrollHeight, 200));
    }
  };

  return (
    <div className={`${s.input} ${props.externalClass}`}>
      <button className={s.attachment}>
        <FontAwesomeIcon icon={faPaperclip} />
      </button>
      <textarea
        className={s.textarea}
        value={value}
        onChange={handleChange}
        style={{ height: height }}
        placeholder="Type your message..."
      />
      <button className={s.send}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
}

export default TextArea;
