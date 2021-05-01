import styled, { css } from "styled-components";

const SC = {
  Container: styled.div(
    ({ theme }) => css`
      display: flex;
    `
  ),
  Avatar: styled.img(
    ({ theme }) => css`
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: ${theme.spacing.md};
    `
  ),
  CommentWrapper: styled.div(
    ({ theme }) => css`
      flex-grow: 1;
      border: 1px solid ${theme.palette.dark};
      border-radius: ${theme.borderRadius};
      position: relative;

      &:before {
        position: absolute;
        top: 11px;
        right: 100%;
        left: -8px;
        display: block;
        width: 8px;
        height: 16px;
        pointer-events: none;
        content: " ";
        clip-path: polygon(0 50%, 100% 0, 100% 100%);
        background-color: ${theme.palette.neutral};
      }
    `
  ),
  CommentHeader: styled.div(
    ({ theme }) => css`
      background-color: ${theme.palette.neutral};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      display: flex;
      align-items: center;
      justify-content: space-between;

      > svg {
        cursor: pointer;
        &:hover {
          opacity: 0.7;
        }
      }
    `
  ),
  CommentBody: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.md};

      p {
        margin: 0;
        margin-bottom: ${theme.spacing.sm};
      }

      * {
        max-width: 100%;
        word-break: break-word;
      }

      a {
        text-decoration: none;
      }
    `
  ),
};

export default SC;
