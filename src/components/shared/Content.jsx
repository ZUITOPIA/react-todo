import styled from "@emotion/styled";
import { Text } from "./UI";

const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 200px;
    overflow-y: scroll;
  `,
  ItemWrapper: styled.div`
    display: flex;
    align-items: center;
    padding: 0px 10px;
  `,
  ContentWrapper: styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 20px;
  `,
  CheckedBox: styled.div`
    width: 18px;
    height: 18px;
    background-image: url("/check.png");
    background-size: contain;
    border-radius: 20px;
    cursor: pointer;
  `,
  UnCheckedBox: styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid lightgray;
    border-radius: 20px;
    cursor: pointer;
  `,
  DeleteBtn: styled.div`
    width: 16px;
    height: 16px;
    background-image: url("/delete.png");
    background-size: contain;
    cursor: pointer;
    margin: 20px;
    opacity: 0.5;
  `,
};

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
