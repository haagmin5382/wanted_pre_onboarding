import { useState } from "react";
import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  //   border: 2px solid black;
  text-align: center;
`;

const ModalMist = styled.div`
  position: absolute;
  top: 37%;
  width: 50vw;
  height: 32vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;
const Modalcontent = styled.div`
  position: relative;
  margin: 0 auto;
  top: 20%;
  width: 25vw;
  height: 10vh;
  text-align: center;
  color: purple;
  border-radius: 10px;
  background: white;
  > .ModalText {
    cursor: pointer;
  }
  > .ModalFont {
    margin-top: 20px;
  }
`;
const ModalButton = styled.button`
  position: relative;
  text-align: center;
  padding: 5px;
  top: 3rem;
  cursor: pointer;
  width: 120px;
  height: 50px;
  background: navy;
  border-radius: 50px;
  border: none;
  font-weight: bold;
  color: white;

  > .ModalFont {
    position: relative;
  }
`;

function Modal() {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <ModalContainer>
        {checked ? (
          <ModalMist onClick={() => setChecked(false)}>
            <Modalcontent>
              <div className="ModalText ModalFont">&times;</div>
              <div className="ModalFont">HELLO CODESTATES</div>
            </Modalcontent>
          </ModalMist>
        ) : null}
        <ModalButton onClick={() => setChecked(!checked)}>
          <div className="ModalFont">Open Modal</div>
        </ModalButton>
      </ModalContainer>
    </div>
  );
}

export default Modal;
