import React from "react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { IssueState } from "src/generated/graphql";
import { Spinner } from "src/assets/icons";
import { IssueType } from "src/utils/types";
import {
  CircleWarning as CircleIcon,
  Tick as TickIcon,
  Comment as CommentIcon,
} from "src/assets/icons";
import SC from "./styles";

interface Props {
  issues: IssueType;
  loading?: boolean;
  filter: IssueState;
}

const Table: React.FC<Props> = ({ issues, filter, loading }) => {
  const { palette } = useTheme();

  return (
    <SC.TableContainer>
      {loading && (
        <SC.LoadingOverlay>
          <Spinner width="48" height="48" />
        </SC.LoadingOverlay>
      )}

      <SC.Header>
        <SC.Filter isActive={filter === IssueState.Open}>
          <CircleIcon title="Open Issues" />
          Open
        </SC.Filter>
        <SC.Filter isActive={filter === IssueState.Closed}>
          <TickIcon title="Closed Issues" />
          Closed
        </SC.Filter>
      </SC.Header>
      {issues.map(({ id, title }) => (
        <SC.Row key={id}>
          <div>
            <CircleIcon fill={palette.success} />
          </div>
          <div>
            <Link to="/404">{title}</Link>
            <div>#3656 opened 5 days ago by user670</div>
          </div>
          <div>
            <CommentIcon />3
          </div>
        </SC.Row>
      ))}
    </SC.TableContainer>
  );
};

export default Table;
