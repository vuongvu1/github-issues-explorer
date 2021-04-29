import React from "react";
import { IssueState } from "src/generated/graphql";
import { IssueType } from "src/utils/types";
import Table from "./Table";
import SC from "./styles";

interface Props {
  data: IssueType[];
  filter: IssueState;
  setFilter: (filter: IssueState) => void;
  loading?: boolean;
  issueCount: number;
  totalCount: number;
  error?: string;
}

const DataTable: React.FC<Props> = ({
  filter,
  setFilter,
  data,
  loading,
  issueCount,
  totalCount,
  error,
}) => {
  return (
    <SC.Container>
      <Table
        issues={data}
        filter={filter}
        setFilter={setFilter}
        loading={loading}
        issueCount={issueCount}
        totalCount={totalCount}
        error={error}
      />
    </SC.Container>
  );
};

export default DataTable;
