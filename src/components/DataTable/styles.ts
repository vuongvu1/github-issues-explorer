import styled, { css } from "styled-components";

const SC = {
  Container: styled.div(
    ({ theme }) => css`
      flex: 2;
      display: flex;
      flex-direction: column;
      padding: ${theme.spacing.md};
      background-color: ${theme.palette.white};
      box-shadow: 0px 1px 0px ${theme.palette.boxShadow};
      border-radius: 12px;
    `
  ),
  TableContainer: styled.div`
    width: 100%;
    position: relative;
  `,
  Header: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.md};
      border: 1px solid ${theme.palette.light};
      border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
    `
  ),
  Row: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.md};
      border: 1px solid ${theme.palette.light};
      border-top: none;
      font-weight: ${theme.fontWeight.md};

      &:nth-last-child(1) {
        border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
      }
    `
  ),
  LoadingOverlay: styled.div(
    ({ theme }) => css`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${theme.palette.boxShadow};
      display: flex;
      justify-content: center;
      align-items: center;
    `
  ),
};

export default SC;
