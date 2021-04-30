import { FC } from "react";
import { connect } from "react-redux";
import { useTheme } from "styled-components";
import { RootState } from "src/reducers/types";
import { setRepo as setRepoAction } from "src/reducers/repoSlice";
import { SearchBar, Text, TextType } from "..";
import SC from "./styles";

type Props = {
  githubUrl?: string;
  setRepo: ({
    url,
    name,
    owner,
  }: {
    url: string;
    name: string;
    owner: string;
  }) => void;
};

const GITHUB_RE = /^https:\/\/github.com\/([^/ ]+)\/([^/ ]+)\/*/;

const Header: FC<Props> = ({ githubUrl, setRepo }) => {
  const { palette } = useTheme();

  const handleSearch = (newText: string) => {
    const [newUrl, owner, name] = newText.match(GITHUB_RE) || [];
    setRepo({ url: newUrl, owner, name });
  };

  return (
    <SC.Wrapper>
      <Text type={TextType.H1} color={palette.white}>
        GitHub Issues Explorer
      </Text>
      <SearchBar githubUrl={githubUrl} onSearch={handleSearch} />
    </SC.Wrapper>
  );
};

const mapDispatchToProps = {
  setRepo: setRepoAction,
};

const mapStateToProps = ({ repoSlice }: RootState) => ({
  githubUrl: repoSlice.url,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
