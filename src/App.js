import "./App.css";
import Payroll from "./Payroll";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Employer Payroll Tax Calculator</h1>
      </header>
      <Payroll />
      <footer>
        <p>
          Designed and coded by{" "}
          <a
            href="https://www.linkedin.com/in/mariana-tellez-resendiz/"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
          >
            Mariana Tellez Resendiz
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MarianaTellezR/employer-payroll-tax-calculator-mariana-tellez"
            target="_blank"
            rel="noreferrer"
            title="GitHub Repository"
          >
            open-sourced on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
