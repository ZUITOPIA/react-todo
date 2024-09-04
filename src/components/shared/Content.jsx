import { Text } from "./UI";
import { Style } from "../styles/Content.styles";

export default function Content({ items, onToggle, onDelete, isCompleted }) {
  return (
    <Style.Wrapper>
      {items.map((todo, index) => (
        <>
          <Style.ItemWrapper key={index}>
            {isCompleted ? (
              <>
                <Style.CheckedBox
                  onClick={() => onToggle(index, isCompleted)}
                />
                <Text.Body>{todo}</Text.Body>
              </>
            ) : (
              <>
                <Style.UnCheckedBox
                  onClick={() => onToggle(index, isCompleted)}
                />
                <Text.Body>{todo}</Text.Body>
              </>
            )}

            <Style.DeleteBtn onClick={() => onDelete(index)} />
          </Style.ItemWrapper>
        </>
      ))}
    </Style.Wrapper>
  );
}
