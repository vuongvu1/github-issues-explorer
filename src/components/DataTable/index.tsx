import React from "react";
import { IssueState } from "src/generated/graphql";
import { IssueType } from "src/utils/types";
import Table from "./Table";
import SC from "./styles";

interface Props {
  data: IssueType[];
  filter: IssueState;
  loading?: boolean;
  totalCount: number;
  error?: string;
}

const DataTable: React.FC<Props> = ({
  filter,
  data,
  loading,
  totalCount,
  error,
}) => {
  return (
    <SC.Container>
      <Table
        issues={data}
        filter={filter}
        loading={loading}
        totalCount={totalCount}
        error={error}
      />
    </SC.Container>
  );
};

export default DataTable;
