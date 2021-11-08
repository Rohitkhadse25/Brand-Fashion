import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Navbar />
    
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/services">
              <Services />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
