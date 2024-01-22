import React from 'react'
import About from './view/About';
import Contact from './view/Contact';
import Home from './view/Home';
import Project from './view/Project';

const SideNav = () => {
  return (
    <div>
      <Home />
      <Project />
      <Contact />
      <About />
    </div>
  )
}

export default SideNav