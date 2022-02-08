import { useState } from "react";
import styled from "styled-components";

const ToggleContatiner = styled.div`
  position: relative;
  top: 3rem;
  left: 47%;
  cursor: pointer;
  > .toggle-container {
    position: relative;
    width: 70px;
    height: 30px;
    background: silver;
    border-radius: 20px;
    &.toggle-checked {
      background: navy;
    }
  }
  > .toggle-circle {
    position: absolute;
    left: 5px;
    top: 2px;
    width: 25px;
    height: 25px;
    background: white;
    border-radius: 50%;
    transition: 0.5s;
    &.toggle-checked {
      left: 40px;
    }
  }
`;
const Description = styled.div`
  position: relative;
  top: 3rem;
  margin-top: 2%;
  text-align: center;
`;

function Toggle() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <ToggleContatiner
        onClick={() => {
          setChecked(!checked);
        }}
      >
        <div
          className={`toggle-container ${checked ? `toggle-checked` : null}`}
        ></div>
        <div
          className={`toggle-circle ${checked ? "toggle-checked" : null}`}
        ></div>
      </ToggleContatiner>
      <Description>
        {checked ? "Toggle Swtich ON" : "Toggle Switch OFF"}
      </Description>
    </div>
  );
}

export default Toggle;
