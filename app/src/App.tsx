import { logger } from "@boobafetes/core";
import { DesignSystem } from "@boobafetes/design-system";
import { infra } from "@boobafetes/infra";
import "./App.css";
import logo from "./logo.svg";

logger.technical.info("app.tsx is parsed");
function App() {
  logger.technical.info("app launched");

  return (
    <div className="App">
      <header className="App-header">
        {infra()}
        <DesignSystem />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
