import Input from "./components/shared/input";
import useLocalStorage from "./components/hooks/useLocalStorage";

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
      <section>
        <h3>진행중인 Todo</h3>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span onClick={() => handleToggleTodo(index, false)}>{todo}</span>
              <button onClick={() => deleteTodo(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>완료한 Todo (DONE)</h3>
        <ul>
          {completed.map((todo, index) => (
            <li key={index}>
              <span onClick={() => handleToggleTodo(index, true)}>{todo}</span>
              <button onClick={() => deleteDone(index)}>삭제</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
