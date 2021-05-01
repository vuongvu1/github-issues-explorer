import { cleanup, fireEvent } from "@testing-library/react";
import { customRender } from "src/utils/testUtils";
import Pagination from "./index";

describe("Pagination", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = customRender(
      <Pagination
        current={1}
        hasPreviousPage={true}
        hasNextPage={false}
        onClickPrevious={jest.fn()}
        onClickNext={jest.fn()}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test("should trigger onClickPrevious and onClickNext", () => {
    const onClickPrev = jest.fn();
    const onClickNext = jest.fn();

    const { getByTestId } = customRender(
      <Pagination
        current={2}
        hasPreviousPage={true}
        hasNextPage={true}
        onClickPrevious={onClickPrev}
        onClickNext={onClickNext}
      />
    );

    const prevBtn = getByTestId("prev-btn");
    fireEvent.click(prevBtn);
    expect(onClickPrev).toHaveBeenCalledTimes(1);

    const nextBtn = getByTestId("next-btn");
    fireEvent.click(nextBtn);
    expect(onClickNext).toHaveBeenCalledTimes(1);
  });
});
