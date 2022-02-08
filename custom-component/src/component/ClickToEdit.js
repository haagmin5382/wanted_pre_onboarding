import styled from "styled-components";
import { useState } from "react";

const ClickToEditContainer = styled.div`
  text-align: center;
  font-weight: bold;

  > .containerText {
    padding-top: 2%;
    padding-bottom: 1%;

    > input {
      margin-left: 2%;
      padding: 10px;
    }
  }
`;

function ClickToEdit() {
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState("20");

  const [textName, setTextName] = useState(name);
  const [textAge, setTextAge] = useState(age);
  return (
    <div
      onClick={() => {
        setTextName(name);
        setTextAge(age);
      }}
    >
      <ClickToEditContainer>
        <div className="containerText">
          이름
          <input onChange={(e) => setName(e.target.value)} value={name}></input>
        </div>
        <div className="containerText">
          나이
          <input onChange={(e) => setAge(e.target.value)} value={age}></input>
        </div>
        <div className="containerText">
          이름 {textName} 나이 {textAge}
        </div>
      </ClickToEditContainer>
    </div>
  );
}

export default ClickToEdit;
