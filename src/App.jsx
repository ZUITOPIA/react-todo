import Content from "./components/shared/Content";
import TodoList from "./components/shared/Content";
import useLocalStorage from "./components/hooks/useLocalStorage";
import Input from "./components/shared/input";
import styled from "@emotion/styled";
import { Text } from "./components/shared/UI";

const Style = {
  AppWrapper: styled.div`
    width: 360px;
    height: 600px;
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    background-color: white;
    padding: 30px;
  `,
  Header: styled.header`
    width: 100%;
    height: 100px;
  `,
  TodoWrapper: styled.div`
    width: 100px;
    border: 1px solid blue;
  `,
};

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [completed, setCompleted] = useLocalStorage("completed", []);

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleToggleTodo = (index, isCompleted) => {
    if (isCompleted) {
      const newCompleted = completed.filter((_, i) => i !== index);
      const todoToMove = completed[index];
      setCompleted(newCompleted);
      setTodos([...todos, todoToMove]);
    } else {
      const newTodos = todos.filter((_, i) => i !== index);
      const completedTodo = todos[index];
      setTodos(newTodos);
      setCompleted([...completed, completedTodo]);
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const deleteDone = (index) => {
    const newCompleted = completed.filter((_, i) => i !== index);
    setCompleted(newCompleted);
  };

  return (
    <Style.AppWrapper>
      <Style.Header>
        <Text.Title>SCHEDULE</Text.Title>
        <Input addTodo={handleAddTodo} />
      </Style.Header>
      <Content
        title="진행중"
        items={todos}
        onToggle={handleToggleTodo}
        onDelete={deleteTodo}
        isCompleted={false}
      />
      <TodoList
        title="완료"
        items={completed}
        onToggle={handleToggleTodo}
        onDelete={deleteDone}
        isCompleted={true}
      />
    </Style.AppWrapper>
  );
}
