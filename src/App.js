import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import { AstheticVid } from "./components/AstheticVid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sidebar></Sidebar>
        <AstheticVid></AstheticVid>
      </header>
    </div>
  );
}

export default App;
