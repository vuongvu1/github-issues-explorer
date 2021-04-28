import React, { useState, useEffect, useCallback } from "react";
import debounce from "src/utils/debounce";
import SC from "./styles";

interface Props {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [text, setText] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchWithDebounce = useCallback(
    debounce((keywords: string) => {
      onSearch(keywords);
    }, 300),
    [onSearch]
  );

  useEffect(() => {
    if (text) {
      searchWithDebounce(text);
    }
  }, [searchWithDebounce, text]);

  return (
    <SC.Container>
      <SC.SearchInput
        placeholder="Paste any GitHub repo here..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <SC.Search />
    </SC.Container>
  );
};

export default SearchBar;
