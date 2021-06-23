import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar></Navbar>
          <Switch>
            <Route path="/education">
              <Education />
            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
