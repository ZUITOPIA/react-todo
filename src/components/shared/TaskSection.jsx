import Task from "./Task";
import { Text } from "./UI";
import { Style } from "../styles/App.styles";

export default function TaskSection({
  title,
  items,
  onToggle,
  onDelete,
  isCompleted,
}) {
  return (
    <Style.TaskWrapper>
      <Text.MiniTitle>
        {title} ({items.length})
      </Text.MiniTitle>
      <Task
        items={items}
        onToggle={onToggle}
        onDelete={onDelete}
        isCompleted={isCompleted}
      />
    </Style.TaskWrapper>
  );
}
