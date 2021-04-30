import { useTheme } from "styled-components";
import { IssueState } from "src/generated/graphql";
import { AuthorType } from "src/reducers/types";
import { Text, TextType, LoadingOverlay } from "src/components";
import { timeSince } from "src/utils/time";
import { CircleWarning, CircleError } from "src/assets/icons";
import { CommentType } from "src/reducers/types";
import SC from "./styles";

interface Props {
  title?: string;
  author?: AuthorType;
  createdAt?: string;
  status?: string;
  body?: string;
  comments?: CommentType[];
  loading: boolean;
  error?: string;
}

const DetailView: React.FC<Props> = ({
  title,
  author,
  createdAt,
  status,
  body,
  comments,
  loading,
  error,
}) => {
  const { palette } = useTheme();
  const isOpen = status === IssueState.Open;

  const IssueInfo = (
    <>
      <Text type={TextType.H2}>{title}</Text>
      <div>
        <SC.StatusLabel isOpen={isOpen}>
          {isOpen ? (
            <CircleWarning fill={palette.white} />
          ) : (
            <CircleError fill={palette.white} />
          )}
          &nbsp;
          {isOpen ? "Open" : "Closed"}
        </SC.StatusLabel>
        <strong>{author?.login}</strong> opened this issue{" "}
        {timeSince(new Date(createdAt || ""))} ago · {comments?.length} comment
        {comments?.length !== 1 ? "s" : ""}
      </div>
    </>
  );

  return (
    <>
      <SC.BackButton to="/">Back</SC.BackButton>
      <SC.Container>
        {error && <SC.Error>Error: {error}</SC.Error>}
        <LoadingOverlay isLoading={loading} />
        {!error && !loading && (
          <>
            {IssueInfo}
            {body}
          </>
        )}
      </SC.Container>
    </>
  );
};

export default DetailView;
