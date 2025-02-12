import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Buscar..." />
      <SearchIcon>
        <FaSearch />
      </SearchIcon>
    </SearchContainer>
  );
};

// Styled-components para o SearchBox
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  margin-right: 100px;
`;

const SearchInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 20px;
`;

const SearchIcon = styled.span`
  font-size: 18px;
  color: #000;
  cursor: pointer;
`;

export default SearchBox;
