import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/test";
import DetailView from "./index";

describe("DetailView", () => {
  afterEach(cleanup);

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
        currentUserAvatar="avatarUrl"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
