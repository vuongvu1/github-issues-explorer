import styled, { css } from "styled-components";

const SC = {
  Container: styled.nav(
    ({ theme }) => css`
      padding: ${theme.spacing.sm};
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
    `
  ),
  CommentHeader: styled.div(
    ({ theme }) => css`
      background-color: ${theme.palette.neutral};
      padding: ${theme.spacing.sm} ${theme.spacing.md};
    `
  ),
  CommentBody: styled.div(
    ({ theme }) => css`
      padding: ${theme.spacing.md};

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
};

export default SC;
