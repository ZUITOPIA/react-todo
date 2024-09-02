import { useState } from "react";

export default function Input({ addSavedValue }) {
  const [inputValue, setInputValue] = useState("");

  const handleSave = () => {
    if (inputValue.trim()) {
      addSavedValue(inputValue);
      setInputValue("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSave}>+</button>
    </div>
  );
}
