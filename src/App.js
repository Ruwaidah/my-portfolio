import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom'
import HomePage from './Components/homePage/HomePage.js'
import Header from './Components/Header/Header.js'
import AboutMe from './Components/about-me/AboutMe.js'
import Projects from './Components/projects/Projects.js'
import ContactMe from './Components/contactMe/ContactMe.js'

function App() {
  return (
    <div className="App">
      <Route path="/" component={Header} />
      {/* <Header /> */}
      <Route path="/about-me" component={AboutMe} />
      <Route path="/projects" component={Projects} />
      <Route path="/contact-me" component={ContactMe} />
    </div>
  );
}

export default App;
