import React, { useState } from "react";

type InputProps = JSX.IntrinsicElements["input"] & {
  label: string;
};

const Input = (props: InputProps) => {
  const { label, ...rest } = props;
  const [text, setText] = useState("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const resetInputChange = () => {
    setText("");
  };

  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input {...rest} type="text" value={text} onChange={onInputChange} />
      <button onClick={resetInputChange}>Reset</button>
    </div>
  );
};

export default Input;
