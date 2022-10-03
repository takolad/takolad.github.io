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
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/react-portfolio/" component={Home} />
        <Route exact path="/react-portfolio/home" component={Home} />
        <Route exact path="/react-portfolio/portfolio" component={Portfolio} />
        <Route exact path="/react-portfolio/portfolio/:id" component={Detail} />
        <Route exact path="/react-portfolio/contact" component={Contact} />
        <Route path="*">
          <Redirect to="/react-portfolio/" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
