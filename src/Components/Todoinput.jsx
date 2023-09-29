import React, { useState } from "react";

export function Todoinput(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterPress = (e) => {
    if (e.key === 'Enter' && inputText !== '') {
      props.addList(inputText);
      setInputText("");
    }
  }

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your to do"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" onClick={() => {
        if (inputText !== '') {
          props.addList(inputText);
          setInputText("");
        }
      }}>+</button>
    </div>
  );
}
