import { Fragment } from "react";
import { useTheme } from "styled-components";
import { IssueState } from "src/generated/graphql";
import { AuthorType } from "src/reducers/types";
import {
  Text,
  TextType,
  LoadingOverlay,
  CommentViewer,
  CommentEditor,
} from "src/components";
import { timeSince } from "src/utils/time";
import { CircleWarning, CircleError } from "src/assets/icons";
import { CommentType } from "src/reducers/types";
import SC from "./styles";

interface Props {
  title: string;
  author: AuthorType;
  createdAt: string;
  status: string;
  body: string;
  comments: CommentType[];
  loading: boolean;
  isCommenting: boolean;
  error?: string;
  currentUser: AuthorType;
  handleAddComment: (text: string) => void;
  handleDeleteComment: (id: string) => void;
}

const DetailView: React.FC<Props> = ({
  title,
  author,
  createdAt,
  status,
  body,
  comments,
  loading,
  isCommenting,
  error,
  currentUser,
  handleAddComment,
  handleDeleteComment,
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
      <SC.BackButton to="/">❮ Back</SC.BackButton>
      <SC.Container>
        {error && <SC.Error>Error: {error}</SC.Error>}
        <LoadingOverlay isLoading={loading} />
        {!error && !loading && (
          <>
            {IssueInfo}
            <SC.Seperator />
            <CommentViewer author={author} body={body} createdAt={createdAt} />
            <SC.Seperator />
            {comments.map((comment) => (
              <Fragment key={comment.id}>
                <CommentViewer
                  id={comment.id}
                  canDelete={
                    currentUser?.login === author?.login ||
                    currentUser?.login === comment.author.login
                  }
                  author={comment.author}
                  body={comment.body}
                  createdAt={comment.createdAt}
                  handleDeleteComment={handleDeleteComment}
                />
                <SC.Seperator />
              </Fragment>
            ))}
            <CommentEditor
              avatarUrl={currentUser?.avatarUrl}
              handleAddComment={handleAddComment}
              isCommenting={isCommenting}
            />
          </>
        )}
      </SC.Container>
    </>
  );
};

export default DetailView;
