import Toggle from "./component/Toggle";
import Modal from "./component/Modal";
import Tab from "./component/Tab";
import Tag from "./component/Tag";
import AutoComplete from "./component/AutoComplete";
import ClickToEdit from "./component/ClickToEdit";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <div className="box">
          <div className="text">Toggle</div>
          <Toggle />
        </div>
        <div className="box">
          <div className="text">Modal</div>
          <Modal />
        </div>
        <div className="box">
          <div className="text">Tab</div>
          <Tab />
        </div>
        <div className="box">
          <div className="text">Tag</div>
          <Tag />
        </div>
        <div className="box">
          <div className="text">AutoComplete</div>
          <AutoComplete />
        </div>
        <div className="box">
          <div className="text">ClickToEdit</div>
          <ClickToEdit />
        </div>
      </div>
    </div>
  );
}

export default App;
