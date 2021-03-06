import { FC } from "react";
import { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { IssueState } from "src/generated/graphql";
import { IssueType } from "src/reducers/types";
import { timeSince } from "src/utils/time";
import { LoadingOverlay } from "..";
import {
  CircleWarning as CircleWarningIcon,
  CircleError as CircleErrorIcon,
  Tick as TickIcon,
  Comment as CommentIcon,
} from "src/assets/icons";
import SC from "./styles";

type Props = {
  issues: IssueType[];
  loading?: boolean;
  filter: IssueState;
  setFilter: (filter: IssueState) => void;
  issueCount?: number;
  totalCount?: number;
  error?: string;
};

const Table: FC<Props> = ({
  issues,
  filter,
  setFilter,
  loading,
  issueCount,
  totalCount,
  error,
}) => {
  const { palette } = useTheme();
  const isFilterOpen = filter === IssueState.Open;
  const nonSelectedIssueCount =
    (issueCount || issueCount === 0) && totalCount
      ? totalCount - issueCount
      : null;

  return (
    <SC.TableContainer>
      <LoadingOverlay isLoading={loading} />
      <SC.Header>
        <SC.Filter
          isActive={isFilterOpen}
          onClick={() => setFilter(IssueState.Open)}
        >
          <CircleWarningIcon title="Open Issues" />
          {isFilterOpen ? issueCount : nonSelectedIssueCount} Open
        </SC.Filter>
        <SC.Filter
          isActive={!isFilterOpen}
          onClick={() => setFilter(IssueState.Closed)}
        >
          <TickIcon title="Closed Issues" />
          {!isFilterOpen ? issueCount : nonSelectedIssueCount} Closed
        </SC.Filter>
      </SC.Header>
      {issues.length === 0 && <SC.Row>No issues found.</SC.Row>}
      {error && <SC.Row isError>Error: {error}</SC.Row>}
      {issues.map(({ id, title, number, author, createdAt, comments }) => (
        <SC.Row key={id}>
          <div>
            {filter === IssueState.Open ? (
              <CircleWarningIcon fill={palette.success} />
            ) : (
              <CircleErrorIcon fill={palette.error} />
            )}
          </div>
          <div>
            <Link to={`/issue/${number}`}>{title}</Link>
            <div>
              #{number} opened {timeSince(new Date(createdAt))} ago by{" "}
              {author?.login || "Unknown"}
            </div>
          </div>
          <Link to={`/issue/${number}`}>
            {(comments.totalCount || null) && (
              <>
                <CommentIcon />
                &nbsp;{comments.totalCount}
              </>
            )}
          </Link>
        </SC.Row>
      ))}
    </SC.TableContainer>
  );
};

export default Table;
