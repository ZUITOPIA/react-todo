import styled from "@emotion/styled";

export const Style = {
  AppWrapper: styled.div`
    width: 620px;
    height: 440px;
    border-radius: 16px;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.5);
    background-color: white;
    padding: 40px 30px 30px 50px;
    margin-bottom: 60px;
  `,
  Header: styled.header`
    width: 100%;
    height: 100px;
    margin-bottom: 40px;
  `,
  TaskSectionWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  TaskWrapper: styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    margin-bottom: 20px;
  `,
};
