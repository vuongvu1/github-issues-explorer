import { FC, useState } from "react";
import { Converter } from "showdown";
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import SC from "./styles";

type Props = {
  avatarUrl: string;
};

const converter = new Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

const CommentEditor: FC<Props> = ({ avatarUrl }) => {
  const [value, setValue] = useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = useState<"write" | "preview">("write");

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
          <SC.CommentButton>Comment</SC.CommentButton>
        </SC.CommentBody>
      </SC.CommentWrapper>
    </SC.Container>
  );
};

export default CommentEditor;
