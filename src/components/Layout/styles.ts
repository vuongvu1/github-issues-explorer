import styled, { css } from "styled-components";

const SC = {
  Container: styled.div`
    width: 100%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
  `,
  Header: styled.div(
    ({ theme }) => css`
      width: 100%;
      height: 70px;
      padding-left: ${theme.spacing.lg};
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background-color: ${theme.palette.neutral};
    `
  ),
  BodyContainer: styled.div(
    ({ theme }) => css`
      flex: 1;
      width: 100%;
      background-color: ${theme.palette.neutral};
      display: flex;
      justify-content: center;
    `
  ),
  Body: styled.div(
    ({ theme }) => css`
      width: 100%;
      max-width: 930px;
      display: flex;
      margin-bottom: ${theme.spacing.lg};
    `
  ),
};

export default SC;
