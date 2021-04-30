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
  CommentBody: styled.div(
    ({ theme }) => css`
      p {
        margin: 0;
        margin-bottom: ${theme.spacing.sm};
      }

      img {
        max-width: 100%;
      }

      a {
        text-decoration: none;
      }
    `
  ),
  CommentButton: styled.button(
    ({ theme }) => css`
      float: right;
      margin: ${theme.spacing.sm};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      background-color: ${theme.palette.success};
      color: ${theme.palette.white};
      border-radius: ${theme.borderRadius};
      font-weight: ${theme.fontWeight.md};
      border: none;
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }
    `
  ),
};

export default SC;
