import React from "react";
import { IssueType } from "src/utils/types";
import Table from "./Table";
import SC from "./styles";

interface Props {
  data: IssueType;
  filter: "Open" | "Closed";
  loading?: boolean;
}

const DataTable: React.FC<Props> = ({ filter, data, loading }) => {
  return (
    <SC.Container>
      <Table issues={data} filter={filter} loading={loading} />
    </SC.Container>
  );
};

export default DataTable;
