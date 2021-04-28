import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.nav(
    ({ theme }) => css`
      background-color: ${theme.palette.primary};
      padding: ${theme.spacing.sm};
      z-index: 1;
      position: sticky;
      top: 0;
      display: grid;
      place-items: center;
    `
  ),
};

export default SC;
