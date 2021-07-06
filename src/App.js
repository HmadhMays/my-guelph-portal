import logo from './assets/logo.svg';
import './App.css';
import { isLoggedIn, AuthButton } from "./netlifyAuth.js";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React TEST
          </a>
          <AuthButton />
        </header>
      </Router>
    </div>
  );
}

export default App;
