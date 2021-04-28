import styled, { css } from "styled-components";
import { mediaQueries } from "src/globalStyles";
import { Search } from "src/assets/icons";

const SC = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 32px;

    ${mediaQueries("md")`
      width: 60%;
    `}
  `,
  SearchInput: styled.input(
    ({ theme }) => css`
      border: 2px solid ${theme.palette.dark};
      width: 100%;
      height: 100%;
      border-radius: 24px;
      font-size: ${theme.fontSize.sm};
      padding: 0 34px 0 12px;
    `
  ),
  Search: styled(Search)`
    position: absolute;
    top: 8px;
    right: 12px;
  `,
};

export default SC;
