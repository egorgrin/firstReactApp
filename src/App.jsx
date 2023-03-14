import "./App.css";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import state from "./redux/state";

const App = (props) => {
  // console.log(props.state.messages);

  return (
    <BrowserRouter>
      <div className="appBg">
        <div className="app-wrapper">
          <Header />
          <Main state={props.state} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
