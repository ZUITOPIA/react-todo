import Content from "./components/shared/Task";
import useLocalStorage from "./components/hooks/useLocalStorage";
import Input from "./components/shared/Input";
import { Text } from "./components/shared/UI";
import { Style } from "./components/styles/App.styles";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [completed, setCompleted] = useLocalStorage("completed", []);

  const handleAddTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const handleToggleTodo = (index, isCompleted) => {
    if (isCompleted) {
      const newCompleted = completed.filter((_, i) => i !== index);
      const todoToMove = completed[index];
      setCompleted(newCompleted);
      setTodos([todoToMove, ...todos]);
    } else {
      const newTodos = todos.filter((_, i) => i !== index);
      const completedTodo = todos[index];
      setTodos(newTodos);
      setCompleted([completedTodo, ...completed]);
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
      <Style.TaskWrapper>
        <Text.MiniTitle>IN PROGRESS ({todos.length})</Text.MiniTitle>
        <Content
          items={todos}
          onToggle={handleToggleTodo}
          onDelete={deleteTodo}
          isCompleted={false}
        />
      </Style.TaskWrapper>

      <Style.TaskWrapper>
        <Text.MiniTitle>COMPLETED ({completed.length})</Text.MiniTitle>
        <Content
          items={completed}
          onToggle={handleToggleTodo}
          onDelete={deleteDone}
          isCompleted={true}
        />
      </Style.TaskWrapper>
    </Style.AppWrapper>
  );
}
