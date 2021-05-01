import { waitFor } from "@testing-library/react";
import debounce from "./debounce";

describe("debounce", () => {
  test("should return correct result", () => {
    const myFunction = jest.fn();
    const functionWithDebounce = debounce(myFunction, 100);

    functionWithDebounce("test-string");

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => {
      expect(myFunction).toBeCalledWith("test-string");
    });
  });
});
