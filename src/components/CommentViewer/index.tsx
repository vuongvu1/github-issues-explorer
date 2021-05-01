import { FC } from "react";
import { Converter } from "showdown";
import { AuthorType } from "src/reducers/types";
import { timeSince } from "src/utils/time";
import { Trash as TrashIcon } from "src/assets/icons";
import SC from "./styles";

type Props = {
  id?: string;
  body: string;
  createdAt: string;
  canDelete?: boolean;
  author: AuthorType;
  handleDeleteComment?: (id: string) => void;
};

const converter = new Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const CommentViewer: FC<Props> = ({
  id,
  body,
  createdAt,
  canDelete,
  author,
  handleDeleteComment,
}) => {
  const confirmDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");

    if (isConfirmed && handleDeleteComment && id) handleDeleteComment(id);
  };

  return (
    <SC.Container>
      <SC.Avatar src={author.avatarUrl} />
      <SC.CommentWrapper>
        <SC.CommentHeader>
          <span>
            <strong>{author?.login}</strong> commented{" "}
            {timeSince(new Date(createdAt))} ago
          </span>
          {canDelete && handleDeleteComment && (
            <TrashIcon data-testid="delete-btn" onClick={confirmDelete} />
          )}
        </SC.CommentHeader>
        <SC.CommentBody
          dangerouslySetInnerHTML={{
            __html:
              converter.makeHtml(body) || "<i>No description provided.</i>",
          }}
        />
      </SC.CommentWrapper>
    </SC.Container>
  );
};

export default CommentViewer;
