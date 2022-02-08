import { useState } from "react";
import styled from "styled-components";

const TagContainer = styled.div`
  width: 50%;
  margin: 5rem auto;
  border: 2px solid silver;
  border-radius: 10px;
  font-weight: bold;
  > ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 5px;
    > li {
      display: flex;
      background: navy;
      color: white;
      border-radius: 10px;
      padding: 3%;
      margin: 10px;
      > .deleteTags {
        display: block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-left: 10px;
        text-align: center;
        background: white;
        border-radius: 50%;
        color: navy;
      }
    }
    > input {
      border: none;
      outline: none;
      font-weight: bold;
      font-size: 16px;
      padding: 15px;
    }
  }
  &:focus-within {
    border: 2px solid purple;
  }
`;

function Tag() {
  const [Tags, SetTags] = useState(["CodeStates"]);
  const addTags = (e) => {
    // for (let el of Tags) {
    //   if (el === e.target.value) {
    //     SetTags(Tags);
    //     return;
    //   } else {
    //     SetTags([...Tags, e.target.value]);
    //   }
    // }
    // SetTags([...Tags, e.target.value]);
    if (Tags.includes(e.target.value)) {
      return;
    } else {
      SetTags([...Tags, e.target.value]);
    }
  };
  const deleteTag = (index) => {
    const filteredTags = Tags.filter((el) => Tags.indexOf(el) !== index);
    SetTags(filteredTags);
  };

  return (
    <div>
      <TagContainer>
        <ul>
          {Tags.map((tag, index) => {
            return (
              <li index={index}>
                {tag}
                <span className="deleteTags" onClick={() => deleteTag(index)}>
                  &times;
                </span>
              </li>
            );
          })}
          <input
            placeholder="Press enter to add tags"
            onKeyDown={(event) =>
              event.key === "Enter" ? addTags(event) : null
            }
          ></input>
        </ul>
      </TagContainer>
    </div>
  );
}

export default Tag;
