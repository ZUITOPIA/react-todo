import { useState, useEffect } from "react";
import Input from "./components/shared/input";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [completed, setCompleted] = useState(() => {
    const savedCompleted = localStorage.getItem("completed");
    return savedCompleted ? JSON.parse(savedCompleted) : [];
  });

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

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [completed]);

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
              <button>삭제</button>
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
              <button>삭제</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
