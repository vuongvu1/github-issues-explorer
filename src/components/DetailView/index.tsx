import { useTheme } from "styled-components";
import { IssueState } from "src/generated/graphql";
import { AuthorType } from "src/reducers/types";
import { Text, TextType } from "src/components";
import { timeSince } from "src/utils/time";
import { CircleWarning, CircleError } from "src/assets/icons";
import SC from "./styles";

interface Props {
  title: string;
  author: AuthorType;
  createdAt: string;
  status: string;
}

const DetailView: React.FC<Props> = ({ title, author, createdAt, status }) => {
  const { palette } = useTheme();
  const isOpen = status === IssueState.Open;

  return (
    <>
      <SC.BackButton to="/">Back</SC.BackButton>
      <SC.Container>
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
          {timeSince(new Date(createdAt))} ago · 4 comments
        </div>
      </SC.Container>
    </>
  );
};

export default DetailView;
