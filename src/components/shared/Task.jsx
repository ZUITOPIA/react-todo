import TaskItem from "./TaskItem";
import { Style } from "../styles/Task.styles";

export default function Task({ items, onToggle, onDelete, isCompleted }) {
  return (
    <Style.Wrapper>
      {items.map((todo, index) => (
        <TaskItem
          key={index}
          todo={todo}
          isCompleted={isCompleted}
          onToggle={() => onToggle(index, isCompleted)}
          onDelete={() => onDelete(index)}
        />
      ))}
    </Style.Wrapper>
  );
}
