import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import "./css/main.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="page-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
