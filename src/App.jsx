import { useState, useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [completed, setCompleted] = useState(() => {
    const savedCompleted = localStorage.getItem("completed");
    return savedCompleted ? JSON.parse(savedCompleted) : [];
  });
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleCompleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    const completedTodo = todos[index];
    setTodos(newTodos);
    setCompleted([...completed, completedTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("completed", JSON.stringify(completed));
  }, [todos, completed]);

  return (
    <div>
      <header>
        <h2>투두리스트</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button onClick={handleAddTodo}>추가</button>
      </header>
      <section>
        <h3>진행중인 Todo</h3>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span onClick={() => handleCompleteTodo(index)}>{todo}</span>
              <button>삭제</button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>완료한 Todo (DONE)</h3>
        <ul>
          {completed.map((todo, index) => (
            <>
              <li key={index}>
                <span>{todo}</span>
                <button>삭제</button>
              </li>
            </>
          ))}
        </ul>
      </section>
    </div>
  );
}
