import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HeroSection/>
          </Route>
          <Route path="/about-me" exact>
            <AboutMe/>
          </Route>
          <Route path="/projects" exact>
            <Projects/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
