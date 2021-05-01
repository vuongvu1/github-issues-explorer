import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/test";
import ErrorPage from "./index";

describe("ErrorPage", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = customRender(<ErrorPage />);
    expect(container).toMatchSnapshot();
  });
});
