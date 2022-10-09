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
        <Route exact path="/react-portfolio/" element=<Home /> />
        <Route exact path="/react-portfolio/home" element=<Home /> />
        <Route exact path="/react-portfolio/portfolio" element=<Portfolio /> />
        <Route exact path="/react-portfolio/portfolio/:id" element=<Detail /> />
        <Route exact path="/react-portfolio/contact" element=<Contact /> />
        <Route path="*" render={() => <Navigate to="/react-portfolio/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
