import React, { useCallback, useRef, useState } from "react";

interface DelayInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const DelayInput = ({ onChange }: DelayInputProps) => {
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [viewText, setViewText] = useState("");

  const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsTyping(true);
      setInputValue(e.target.value);
      if (timeRef.current !== null) {
        clearTimeout(timeRef.current);
      }

      timeRef.current = setTimeout(() => {
        timeRef.current = null;
        setIsTyping(false);
        setViewText(e.target.value);
      }, 1000);
    },
    [onChange]
  );

  return (
    <>
      <input
        data-testid="input-text"
        value={inputValue}
        onChange={handleChange}
      />
      <span data-testid="display-text">
        {isTyping ? "입력중..." : `입력한 텍스트: ${viewText}`}
      </span>
    </>
  );
};

export default DelayInput;
