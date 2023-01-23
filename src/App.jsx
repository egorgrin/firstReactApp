import './App.css';
import Main from './components/Main/Main.jsx';
import Header from './components/Header/Header.jsx';

const App = () => {
  return (
    <div className="appBg">
      <div className="app-wrapper">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
