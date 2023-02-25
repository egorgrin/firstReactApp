import "./App.css";
import Main from "./components/Main/Main.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="appBg">
        <div className="app-wrapper">
          <Header />
          <Main />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
