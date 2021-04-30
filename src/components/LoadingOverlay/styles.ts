import styled, { css } from "styled-components";

const SC = {
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
};

export default SC;
