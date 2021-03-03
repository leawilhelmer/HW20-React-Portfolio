import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About/aboutMe";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Projects from "./components/Projects/projects"
import Contact from "./components/Contact/contact"

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/navbar" component={Navbar} />
          <Route exact path="/footer" component={Footer} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

