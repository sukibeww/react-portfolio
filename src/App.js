import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';

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
          <Route path="/contacts" exact>
            <Contacts/>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
