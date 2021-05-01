import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/testUtils";
import Layout from "./index";

describe("Layout", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = customRender(
      <Layout title="This is title">
        <p>test paragraph</p>
      </Layout>
    );

    expect(container).toMatchSnapshot();
  });
});
