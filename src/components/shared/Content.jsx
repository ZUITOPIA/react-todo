export default function Content({
  title,
  items,
  onToggle,
  onDelete,
  isCompleted,
}) {
  return (
    <section>
      <h3>{title}</h3>
      <ul>
        {items.map((todo, index) => (
          <li key={index}>
            <span onClick={() => onToggle(index, isCompleted)}>{todo}</span>
            <button onClick={() => onDelete(index)}>삭제</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
