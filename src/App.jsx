import TodoList from "./components/TodoList";
import useLocalStorage from "./components/hooks/useLocalStorage";
import Input from "./components/shared/input";

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
    <div>
      <header>
        <h2>투두리스트</h2>
        <Input addTodo={handleAddTodo} />
      </header>
      <TodoList
        title="진행중인 Todo"
        items={todos}
        onToggle={handleToggleTodo}
        onDelete={deleteTodo}
        isCompleted={false}
      />
      <TodoList
        title="완료한 Todo (DONE)"
        items={completed}
        onToggle={handleToggleTodo}
        onDelete={deleteDone}
        isCompleted={true}
      />
    </div>
  );
}
