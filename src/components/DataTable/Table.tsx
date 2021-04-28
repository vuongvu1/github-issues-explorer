import React from "react";
import { Spinner } from "src/assets/icons";
import { IssueType } from "src/utils/types";
import SC from "./styles";

interface Props {
  issues: IssueType;
  loading?: boolean;
  filter: "Open" | "Closed";
}

const Table: React.FC<Props> = ({ issues, filter, loading }) => (
  <SC.TableContainer>
    {loading && (
      <SC.LoadingOverlay>
        <Spinner width="48" height="48" />
      </SC.LoadingOverlay>
    )}

    <SC.Header>{filter}</SC.Header>
    {issues.map(({ id, title }) => (
      <SC.Row key={id}>{title}</SC.Row>
    ))}
  </SC.TableContainer>
);

export default Table;
