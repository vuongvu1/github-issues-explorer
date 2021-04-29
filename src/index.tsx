import React from "react";
import ReactDOM from "react-dom";
import { Provider as StoreProvider } from "react-redux";
import { ThemeProvider } from "styled-components";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { ApolloProvider as ApolloHooksProvider } from "@apollo/react-hooks";
import { setContext } from "@apollo/client/link/context";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle, { theme } from "./globalStyles";
import store from "./store";
import App from "./router";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GITHUB_GRAPHQL_URI,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <ThemeProvider theme={theme}>
          <StoreProvider store={store}>
            <App />
          </StoreProvider>
        </ThemeProvider>
      </ApolloHooksProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
