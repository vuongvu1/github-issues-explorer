import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/testUtils";
import DetailView from "./index";

describe("DetailView", () => {
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
      <DetailView
        title="All React versions are not displayed"
        author={{
          avatarUrl: "avatarUrl",
          login: "vuongvu",
        }}
        createdAt="2021-04-28T09:02:57Z"
        status="OPEN"
        body="Hello, all React versions are not displayed i"
        comments={[]}
        isCommenting={false}
        handleAddComment={() => {}}
        handleDeleteComment={() => {}}
        loading={false}
        error={undefined}
        currentUser={{
          login: "username",
          avatarUrl: "avatarUrl",
        }}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
