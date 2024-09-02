import useInput from "../hooks/useInput";

export default function Input({ addTodo }) {
  const [inputValue, handleChange, setInputValue] = useInput("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (inputValue.trim()) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">+</button>
      </form>
    </>
  );
}
