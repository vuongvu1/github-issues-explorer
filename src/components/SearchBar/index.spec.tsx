import { cleanup, fireEvent, waitFor } from "@testing-library/react";
import { customRender } from "src/utils/test";
import SearchBar from "./index";

describe("SearchBar", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const onSearchMock = jest.fn();
    const { container } = customRender(<SearchBar onSearch={onSearchMock} />);
    expect(container).toMatchSnapshot();
  });

  test("should trigger onSearch handler when change input", () => {
    const onSearchMock = jest.fn();
    const { getByTestId } = customRender(
      <SearchBar githubUrl="url" onSearch={onSearchMock} />
    );

    const searchInput = getByTestId("searchInputId");
    fireEvent.change(searchInput, {
      target: { value: "keyword" },
    });

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      expect(onSearchMock).toHaveBeenCalledWith("keyword");
    });
  });
});
