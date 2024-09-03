import useInput from "../hooks/useInput";
import styled from "@emotion/styled";

const Style = {
  InputWrapper: styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
  `,
  Input: styled.input`
    border: none;
  `,
  Button: styled.button`
    width: 35px;
    height: 35px;
    border-radius: 40%;
    border: none;
    background-color: #3e45c3;
    color: white;
    font-size: large;
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
