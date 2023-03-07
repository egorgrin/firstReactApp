import "./App.css";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="appBg">
        <div className="app-wrapper">
          <Header />
          <Main friends={props.friends} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
