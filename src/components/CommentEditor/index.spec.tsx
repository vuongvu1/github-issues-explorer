import { cleanup, fireEvent } from "@testing-library/react";
import { customRender } from "src/utils/testUtils";
import CommentEditor from "./index";

describe("CommentEditor", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = customRender(
      <CommentEditor
        avatarUrl="avatarUrl"
        isCommenting={false}
        handleAddComment={() => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test("should handle add comment", () => {
    window.confirm = jest.fn(() => true);
    const mockAddComment = jest.fn();

    const { getByTestId, container } = customRender(
      <CommentEditor
        avatarUrl="avatarUrl"
        isCommenting={false}
        handleAddComment={mockAddComment}
      />
    );

    const textArea = container.querySelector("textarea");
    if (textArea) {
      fireEvent.change(textArea, { target: { value: "123" } });
    }
    fireEvent.click(getByTestId("add-comment-btn"));

    expect(mockAddComment).toHaveBeenCalledTimes(1);
  });
});
