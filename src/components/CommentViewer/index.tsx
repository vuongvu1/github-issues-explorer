import { FC } from "react";
import { Converter } from "showdown";
import { CommentType } from "src/reducers/types";
import { timeSince } from "src/utils/time";
import SC from "./styles";

type Props = CommentType;

const converter = new Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const CommentViewer: FC<Props> = ({ body, createdAt, author }) => {
  return (
    <SC.Container>
      <SC.Avatar src={author.avatarUrl} />
      <SC.CommentWrapper>
        <SC.CommentHeader>
          <strong>{author?.login}</strong> commented{" "}
          {timeSince(new Date(createdAt))} ago
        </SC.CommentHeader>
        <SC.CommentBody
          dangerouslySetInnerHTML={{ __html: converter.makeHtml(body) }}
        />
      </SC.CommentWrapper>
    </SC.Container>
  );
};

export default CommentViewer;
