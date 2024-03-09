import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./css/main.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="page-container">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
