import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { BrowserRouter as Router } from "react-router-dom";

import { isLoggedIn, AuthButton, netlifyAuth } from "./utils/netlifyAuth.js";
import history from "./utils/history";

import Dashboard from "./components/Dashboard";
import AppHeader from "./components/AppHeader";

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <AppHeader />
          {isLoggedIn() ? (
            <Dashboard />
          ) : (
            <>
              {netlifyAuth.authenticate(() => history.push("/"))}

              <div style={{ marginTop: "3em", fontSize:"120%" }}>
                <AuthButton />
              </div>
              
            </>
          )}
        </Router>
      </main>
    </div>
  );
}

export default App;
