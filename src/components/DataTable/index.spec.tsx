import { cleanup } from "@testing-library/react";
import { customRender } from "src/utils/test";
import { IssueState } from "src/generated/graphql";
import DataTable from "./index";

describe("DataTable", () => {
  afterEach(cleanup);

  test("should match snapshot", () => {
    const { container } = customRender(
      <DataTable
        data={[]}
        filter={IssueState.Open}
        setFilter={() => {}}
        loading={false}
        issueCount={10}
        totalCount={20}
        error={undefined}
        hasNextPage={true}
        goNextPage={() => {}}
        hasPreviousPage={false}
        goPreviousPage={() => {}}
        currentPage={1}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
