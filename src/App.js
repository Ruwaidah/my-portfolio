import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Header from './Components/Header/Header.js'
import AboutMe from './Components/about-me/AboutMe.js'
import Projects from './Components/projects/Projects.js'
import ContactMe from './Components/contactMe/ContactMe.js'
import Footer from './Components/footer/Footer.js'
import Skills from './Components/skills/Skills.js'

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      <Route exact path="/" component={AboutMe} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact-me" component={ContactMe} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;
