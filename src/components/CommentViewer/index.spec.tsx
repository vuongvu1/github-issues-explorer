import { cleanup, fireEvent } from "@testing-library/react";
import { customRender } from "src/utils/testUtils";
import CommentViewer from "./index";

describe("CommentViewer", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("2021-05-01T12:00:00.000Z"));
  });

  afterAll(() => {
    jest.useRealTimers();
    cleanup();
  });

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
        canDelete
      />
    );

    fireEvent.click(getByTestId("delete-btn"));

    expect(mockDeleteComment).toHaveBeenCalledTimes(1);
  });
});
