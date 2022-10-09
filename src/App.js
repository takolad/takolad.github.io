import "./App.css";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element=<Home /> />
        <Route exact path="/home" element=<Home /> />
        <Route exact path="/portfolio" element=<Portfolio /> />
        <Route exact path="/portfolio/:id" element=<Detail /> />
        <Route exact path="/contact" element=<Contact /> />
        <Route path="*" render={() => <Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
