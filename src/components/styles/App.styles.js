import styled from "@emotion/styled";

export const Style = {
  AppWrapper: styled.div`
    width: 360px;
    height: 600px;
    border-radius: 20px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    background-color: white;
    padding: 40px 30px 30px 30px;
  `,
  Header: styled.header`
    width: 100%;
    height: 100px;
    margin-bottom: 40px;
  `,
  TaskWrapper: styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    margin-bottom: 20px;
  `,
};
