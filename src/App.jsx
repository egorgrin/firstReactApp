import "./App.css";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";
import { addMessage } from "./redux/state";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="background">
        <div className="wrapper">
          <Header />
          <Main state={props.state} addMessage={props.addMessage} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
