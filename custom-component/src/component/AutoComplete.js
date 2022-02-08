import styled from "styled-components";
import { useState } from "react";

const borderRadius = `15px`;
const borderEdge = "15px 15px 0 0";
const AutoCompleteContainer = styled.div`
  display: flex;
  margin-top: 8vh;
  padding: 1rem;
  border: 1px solid silver;
  border-radius: ${(props) =>
    props.searching.length === 0 || props.filtering.length === 0
      ? borderRadius
      : borderEdge};

  &:focus-within {
    // box-shadow: 2px 5px 2px silver;
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
  box-shadow: 2px 5px 2px silver;
  padding: 10px;
  > div {
    margin-left: 1vw;
  }
`;

function AutoComplete() {
  const keyWord = ["refurbishied", "vintage", "antique", "rustic"];

  const [searching, setSearching] = useState("");

  const filtering = keyWord.filter((el) => {
    return el.includes(searching);
  });

  return (
    <div>
      <AutoCompleteContainer searching={searching} filtering={filtering}>
        <input
          onChange={(e) => setSearching(e.target.value)}
          value={searching}
        ></input>
        <span onClick={() => setSearching("")}>&times;</span>
      </AutoCompleteContainer>
      {searching !== "" && filtering.length !== 0 ? (
        <DropDown>
          {filtering.map((el) => (
            <div onClick={() => setSearching(el)}>{el}</div>
          ))}
        </DropDown>
      ) : null}
    </div>
  );
}

export default AutoComplete;
