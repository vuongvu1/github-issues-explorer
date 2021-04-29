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
      border: 1px solid ${theme.palette.dark};
      border-radius: ${theme.borderRadius} ${theme.borderRadius} 0 0;
      background-color: ${theme.palette.neutralLight};
      display: flex;
      align-items: center;
    `
  ),
  Row: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.md};
      border: 1px solid ${theme.palette.dark};
      border-top: none;
      font-weight: ${theme.fontWeight.md};
      display: flex;
      align-items: center;
      justify-content: space-between;

      > * {
        &:nth-child(1) {
          align-self: flex-start;
          width: auto;
          height: 20px;
          display: flex;
          align-items: center;
          margin-right: ${theme.spacing.sm};
        }
        &:nth-child(2) {
          flex: 1;

          > a {
            text-decoration: none;
            color: ${theme.palette.black};

            &:hover {
              opacity: 0.7;
            }
          }

          > * {
            &:nth-last-child(1) {
              font-size: 12px;
              font-weight: ${theme.fontWeight.sm};
              margin-top: ${theme.spacing.sm};
            }
          }
        }
        &:nth-child(3) {
          align-self: flex-start;
          width: 36px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          cursor: pointer;
          text-decoration: none;
          color: ${theme.palette.black};

          &:hover {
            opacity: 0.7;
          }
        }
      }

      &:nth-last-child(1) {
        border-radius: 0 0 ${theme.borderRadius} ${theme.borderRadius};
      }

      &:hover {
        background-color: ${theme.palette.neutralLight};
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
  Filter: styled.div<{ isActive?: boolean }>(
    ({ theme, isActive }) => css`
      display: flex;
      align-items: center;
      margin-right: ${theme.spacing.md};
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }

      ${isActive &&
      css`
        font-weight: ${theme.fontWeight.md};
      `}

      > * {
        margin-right: ${theme.spacing.sm};
      }
    `
  ),
};

export default SC;
