import React from "react";
import { render, cleanup } from "@testing-library/react";
import * as Icons from "./index";

describe("Icons", () => {
  afterEach(cleanup);

  test.each(Object.keys(Icons))(
    "component `%s` should match snapshot",
    (componentName) => {
      //@ts-ignore
      const IconComponent = Icons[componentName];
      const { container } = render(<IconComponent />);
      expect(container).toMatchSnapshot();
    }
  );
});
