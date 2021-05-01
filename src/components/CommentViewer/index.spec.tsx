import { cleanup, fireEvent } from "@testing-library/react";
import { customRender } from "src/utils/test";
import CommentViewer from "./index";

describe("CommentViewer", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = customRender(
      <CommentViewer
        author={{
          avatarUrl: "avatarUrl",
          login: "vuongvu",
        }}
        body="Comment body"
        createdAt="2021-04-28T09:02:57Z"
        handleDeleteComment={() => {}}
      />
    );

    expect(container).toMatchSnapshot();
  });

  test("should handle delete comment", () => {
    window.confirm = jest.fn(() => true);
    const mockDeleteComment = jest.fn();

    const { getByTestId } = customRender(
      <CommentViewer
        id="id"
        author={{
          avatarUrl: "avatarUrl",
          login: "vuongvu",
        }}
        body="Comment body"
        createdAt="2021-04-28T09:02:57Z"
        handleDeleteComment={mockDeleteComment}
      />
    );

    fireEvent.click(getByTestId("delete-btn"));

    expect(mockDeleteComment).toHaveBeenCalledTimes(1);
  });
});
