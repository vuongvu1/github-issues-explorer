import { ReactNode } from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import { MockedProvider } from "@apollo/react-testing";
import { BrowserRouter } from "react-router-dom";
import { theme } from "src/globalStyles";
import {
  IssueState,
  IssueOrderField,
  OrderDirection,
} from "src/generated/graphql";

const mockStore = configureMockStore();
const store = mockStore({
  repoSlice: {
    url: "https://github.com/reactjs/reactjs.org",
    currentPage: 1,
    searchParams: {
      name: "reactjs.org",
      owner: "reactjs",
      status: IssueState.Open,
      orderBy: IssueOrderField.CreatedAt,
      orderDir: OrderDirection.Desc,
      before: undefined,
      after: undefined,
      first: 10,
      last: undefined,
    },
  },
});

export const customRender = (Component: ReactNode) =>
  render(
    <ThemeProvider theme={theme}>
      <MockedProvider mocks={[]} addTypename={false}>
        <BrowserRouter>
          <Provider store={store}>{Component}</Provider>
        </BrowserRouter>
      </MockedProvider>
    </ThemeProvider>
  );
