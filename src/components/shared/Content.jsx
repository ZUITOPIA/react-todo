import { Text } from "./UI";
import { Style } from "../styles/Content.styles";

export default function Content({ items, onToggle, onDelete, isCompleted }) {
  return (
    <Style.Wrapper>
      <ul>
        {items.map((todo, index) => (
          <Style.ItemWrapper key={index}>
            {isCompleted ? (
              <>
                <Style.CheckedBox
                  onClick={() => onToggle(index, isCompleted)}
                />
              </>
            ) : (
              <>
                <Style.UnCheckedBox
                  onClick={() => onToggle(index, isCompleted)}
                />
              </>
            )}

            <Style.ContentWrapper>
              <Text.Body>{todo}</Text.Body>
              <Style.DeleteBtn onClick={() => onDelete(index)} />
            </Style.ContentWrapper>
          </Style.ItemWrapper>
        ))}
      </ul>
    </Style.Wrapper>
  );
}
