import styled from "@emotion/styled";

export const Style = {
  InputWrapper: styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
  `,
  Input: styled.input`
    width: 100%;
    height: 40px;
    padding: 0 0 0 15px;
    border: none;
    outline: none;
  `,
  Button: styled.button`
    width: 40px;
    height: 35px;
    border-radius: 100%;
    border: none;
    background-color: #464979;
    color: white;
    font-size: large;
    cursor: pointer;
    margin-right: 15px;
  `,
};
