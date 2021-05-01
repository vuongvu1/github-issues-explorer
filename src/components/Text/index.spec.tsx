import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/testUtils";
import Text, { TextType } from "./index";

describe("Text", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const TextH1 = customRender(<Text type={TextType.H1} />);
    const TextH2 = customRender(<Text type={TextType.H2} />);
    const TextBody = customRender(<Text type={TextType.BODY} />);

    expect(TextH1.container).toMatchSnapshot();
    expect(TextH2.container).toMatchSnapshot();
    expect(TextBody.container).toMatchSnapshot();
  });
});
