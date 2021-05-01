import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/testUtils";
import Header from "./index";

describe("Header", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = customRender(<Header />);

    expect(container).toMatchSnapshot();
  });
});
