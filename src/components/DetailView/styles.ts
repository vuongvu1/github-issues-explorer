import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { mediaQueries } from "src/globalStyles";

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
      margin-top: ${theme.spacing.lg};

      ${mediaQueries("lg")`
        margin-top: 0;
      `}
    `
  ),
  BackButton: styled(Link)(
    ({ theme }) => css`
      position: fixed;
      top: 150px;
      left: ${theme.spacing.lg};
      text-decoration: none;
      font-weight: ${theme.fontWeight.md};
      color: ${theme.palette.primary};

      &:hover {
        opacity: 0.7;
      }
    `
  ),
  StatusLabel: styled.span<{ isOpen: boolean }>(
    ({ theme, isOpen }) => css`
      color: ${theme.palette.white};
      padding: 4px ${theme.spacing.sm};
      margin-top: ${theme.spacing.sm};
      margin-right: ${theme.spacing.sm};
      border-radius: 2em;
      font-weight: ${theme.fontWeight.md};
      display: inline-flex;
      align-items: center;

      ${isOpen
        ? css`
            background-color: ${theme.palette.success};
          `
        : css`
            background-color: ${theme.palette.error};
          `};
    `
  ),
  Error: styled.span(
    ({ theme }) => css`
      color: ${theme.palette.error};
      font-weight: ${theme.fontWeight.md};
    `
  ),
};

export default SC;
