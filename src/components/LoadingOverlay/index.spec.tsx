import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/test";
import LoadingOverlay from "./index";

describe("Text", () => {
  afterEach(cleanup);

  test("should match snapshot when loading", () => {
    const { container } = customRender(<LoadingOverlay isLoading />);

    expect(container).toMatchSnapshot();
  });

  test("should return empty when not loading", () => {
    const { container } = customRender(<LoadingOverlay isLoading={false} />);

    expect(container).toMatchSnapshot();
  });
});
