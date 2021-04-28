import styled, { css } from "styled-components";
import { TextType } from "./index";

const SC = {
  Container: styled.div<{ type?: TextType; color?: string }>(
    ({ theme, type, color }) => css`
      color: ${color || theme.palette.black};
      font-weight: normal;
      font-size: ${theme.fontSize.md};
      margin: 0;
      padding: 0;

      ${type === TextType.H1 &&
      css`
        font-weight: bold;
        font-size: ${theme.fontSize.lg};
      `}

      ${type === TextType.H2 &&
      css`
        font-weight: bold;
        font-size: ${theme.fontSize.md};
      `}

      ${type === TextType.BODY &&
      css`
        margin: 0;
        font-weight: normal;
        font-size: ${theme.fontSize.md};
      `}
    `
  ),
};

export default SC;
