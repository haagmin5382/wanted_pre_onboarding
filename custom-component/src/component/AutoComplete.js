import styled from "styled-components";
import { useState } from "react";
const AutoCompleteContainer = styled.div`
  display: flex;
  margin-top: 8vh;
  padding: 1rem;
  border: 1px solid silver;
  border-radius: 10px 10px 0 0;

  &:focus-within {
    box-shadow: 2px 5px 2px silver;
  }
  > input {
    flex: 1 0 0;
    border: none;
    outline: none;
    margin: 0;
  }
  > span {
    cursor: pointer;
  }
`;
const DropDown = styled.div`
  border: 1px solid silver;
  border-radius: 0 0 10px 10px;
`;

function AutoComplete() {
  const keyWord = ["refurbishied", "vintage", "antique"];

  const [searching, setSearching] = useState("");

  const filtering = keyWord.filter((el) => {
    return el.includes(searching);
  });

  return (
    <div>
      <AutoCompleteContainer>
        <input
          onChange={(e) => setSearching(e.target.value)}
          value={searching}
        ></input>
        <span onClick={() => setSearching("")}>&times;</span>
      </AutoCompleteContainer>
      {searching !== "" ? (
        <DropDown>
          {filtering.map((el) => (
            <div onClick={() => setSearching(el)}>{el}</div>
          ))}
        </DropDown>
      ) : null}
      <div onClick={() => setSearching("")}></div>
    </div>
  );
}

export default AutoComplete;
