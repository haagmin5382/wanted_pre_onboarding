import styled from "styled-components";
import { useState } from "react";
const TabContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: silver;
  list-style: none;
  margin: 0 auto;
  width: 40vw;
  > .TabMenu {
    padding: 10%;
    color: gray;
    font-weight: bold;
    cursor: pointer;
    &.SelectedTab {
      background: navy;
      color: white;
    }
  }
`;
const Tabtext = styled.div`
  text-align: center;
  margin-top: 10%;
`;

function Tab() {
  const [tabmenu, setTabmenu] = useState(0);
  const [TabText, setTabText] = useState("Tab menu ONE");
  return (
    <div>
      <TabContainer>
        <li
          className={`TabMenu ${tabmenu === 0 ? `SelectedTab` : null}`}
          onClick={() => {
            setTabmenu(0);
            setTabText("Tab menu ONE");
          }}
        >
          Tab1
        </li>
        <li
          className={`TabMenu ${tabmenu === 1 ? `SelectedTab` : null}`}
          onClick={() => {
            setTabmenu(1);
            setTabText("Tab menu TWO");
          }}
        >
          Tab2
        </li>
        <li
          className={`TabMenu ${tabmenu === 2 ? `SelectedTab` : null}`}
          onClick={() => {
            setTabmenu(2);
            setTabText("Tab menu THREE");
          }}
        >
          Tab3
        </li>
      </TabContainer>
      <Tabtext>{TabText}</Tabtext>
    </div>
  );
}

export default Tab;
