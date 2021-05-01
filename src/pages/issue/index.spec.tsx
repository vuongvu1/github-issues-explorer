import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/testUtils";
import IssuePage from "./index";

describe("IssuePage", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = customRender(<IssuePage />);
    expect(container).toMatchSnapshot();
  });
});
