import useInput from "../hooks/useInput";
import styled from "@emotion/styled";

const Style = {
  InputWrapper: styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Input: styled.input`
    width: 100%;
    height: 40px;
    padding: 0 0 0 5px;
    border: none;
    outline: none;
  `,
  Button: styled.button`
    width: 40px;
    height: 35px;
    border-radius: 100%;
    border: none;
    background-color: #868686;
    color: white;
    font-size: large;
    cursor: pointer;
  `,
};

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
    <form onSubmit={handleAddTodo}>
      <Style.InputWrapper>
        <Style.Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="할 일을 입력하세요"
        />
        <Style.Button type="submit">+</Style.Button>
      </Style.InputWrapper>
    </form>
  );
}
