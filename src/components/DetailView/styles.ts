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
};

export default SC;
