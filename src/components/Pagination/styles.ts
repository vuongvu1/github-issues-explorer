import styled, { css } from "styled-components";

interface ButtonProps {
  isDisabled?: boolean;
  isActive?: boolean;
}

const SC = {
  Container: styled.div(
    ({ theme }) => css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-top: ${theme.spacing.md};
    `
  ),
  Button: styled.button<ButtonProps>(
    ({ theme, isActive, isDisabled }) => css`
      padding: ${theme.spacing.sm};
      background-color: ${theme.palette.white};
      min-width: 34px;
      height: 34px;
      cursor: pointer;
      margin-left: ${theme.spacing.sm};
      border-radius: ${theme.borderRadius};
      border: 1px solid transparent;
      transition: all 0.3s;

      &:hover {
        border: 1px solid ${theme.palette.dark};
        background-color: ${theme.palette.neutral};
      }

      ${isDisabled &&
      css`
        opacity: 0.5;
        cursor: not-allowed;
        &:hover {
          background-color: ${theme.palette.white};
        }
      `}

      ${isActive &&
      css`
        font-weight: bold;
        color: ${theme.palette.white};
        background-color: ${theme.palette.success};

        &:hover {
          border: 1px solid transparent;
          background-color: ${theme.palette.success};
        }
      `}
    `
  ),
};

export default SC;
