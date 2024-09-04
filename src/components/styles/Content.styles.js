import styled from "@emotion/styled";

export const Style = {
  Wrapper: styled.div`
    width: 100%;
    height: 200px;
    overflow-y: scroll;
    margin-top: 10px;
  `,
  ItemWrapper: styled.div`
    display: flex;
    align-items: center;
    width: 90%;
    height: 40px;
  `,
  CheckedBox: styled.div`
    width: 18px;
    height: 18px;
    background-image: url("/check.png");
    background-size: contain;
    border-radius: 20px;
    opacity: 0.2;
    cursor: pointer;
    margin-right: 14px;
  `,
  UnCheckedBox: styled.div`
    width: 20px;
    height: 20px;
    border: 2px solid lightgray;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 14px;
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
