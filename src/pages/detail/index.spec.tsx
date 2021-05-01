import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/testUtils";
import DetailPage from "./index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    id: "1",
  }),
}));

describe("DetailPage", () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  test("should match snapshot", () => {
    const { container } = customRender(<DetailPage />);
    expect(container).toMatchSnapshot();
  });
});
