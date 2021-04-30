import { FC, useState } from "react";
import { Converter } from "showdown";
import ReactMde from "react-mde";
import { Spinner } from "src/assets/icons";
import "react-mde/lib/styles/css/react-mde-all.css";
import SC from "./styles";

type Props = {
  avatarUrl: string;
  handleAddComment: (text: string) => void;
  isCommenting: boolean;
};

const converter = new Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const CommentEditor: FC<Props> = ({
  avatarUrl,
  handleAddComment,
  isCommenting,
}) => {
  const [value, setValue] = useState("");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

  const onClickComment = () => {
    handleAddComment(value);
    setValue("");
  };

  return (
    <SC.Container>
      <SC.Avatar src={avatarUrl} />
      <SC.CommentWrapper>
        <SC.CommentBody>
          <ReactMde
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
          <SC.CommentButton
            disabled={!value || isCommenting}
            onClick={onClickComment}
          >
            Comment
          </SC.CommentButton>
          <SC.Loading>
            {isCommenting && <Spinner width="32" height="32" />}
          </SC.Loading>
        </SC.CommentBody>
      </SC.CommentWrapper>
    </SC.Container>
  );
};

export default CommentEditor;
