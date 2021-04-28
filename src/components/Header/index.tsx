import { useTheme } from "styled-components";
import { SearchBar, Text, TextType } from "..";
import SC from "./styles";

const Header = () => {
  const { palette } = useTheme();

  return (
    <SC.Wrapper>
      <Text type={TextType.H1} color={palette.white}>
        GitHub Issues Explorer
      </Text>
      <SearchBar onSearch={(text) => console.log(text)} />
    </SC.Wrapper>
  );
};

export default Header;
