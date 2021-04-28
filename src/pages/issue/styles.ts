import styled, { css } from "styled-components";

const SC = {
  Wrapper: styled.div(
    ({ theme }) => css`
      background-color: ${theme.palette.white};
      width: 100vw;
      height: 100vh;
      display: grid;
      place-items: center;
    `
  ),
};

export default SC;
