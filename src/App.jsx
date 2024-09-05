import TodoSection from "./components/shared/TodoSection";
import useLocalStorage from "./components/hooks/useLocalStorage";
import { Style } from "./components/styles/App.styles";
import Header from "./Header";

export default function App() {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [completed, setCompleted] = useLocalStorage("completed", []);

  const handleFormSubmit = (todo) => {
    setTodos((prev) => [todo, ...prev]);
  };

  const handleToggleTodo = (index, isCompleted) => {
    if (isCompleted) {
      const newCompleted = completed.filter((_, i) => i !== index);
      const todoToMove = completed[index];
      setCompleted(newCompleted);
      setTodos((prev) => [todoToMove, ...prev]);
    } else {
      const newTodos = todos.filter((_, i) => i !== index);
      const completedTodo = todos[index];
      setTodos(newTodos);
      setCompleted((prev) => [completedTodo, ...prev]);
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
      <Header handleFormSubmit={handleFormSubmit} />

      <Style.TodoSectionWrapper>
        <TodoSection
          title="IN PROGRESS"
          items={todos}
          onToggle={handleToggleTodo}
          onDelete={deleteTodo}
          isCompleted={false}
        />

        <TodoSection
          title="COMPLETED"
          items={completed}
          onToggle={handleToggleTodo}
          onDelete={deleteDone}
          isCompleted={true}
        />
      </Style.TodoSectionWrapper>
    </Style.AppWrapper>
  );
}
