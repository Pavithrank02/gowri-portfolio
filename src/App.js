import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './view/About';
import Contact from './view/Contact';
import Home from './view/Home';
import SideNav from './components/SideNav/SideNav';
import Project from './view/Project';
import Service from './view/Service';
import { Grid } from '@mui/material';
import { useTheme } from './ThemeContext';
import { AppCss } from './constants';

function App() {
  const { theme } = useTheme();

  return (
    <Grid container
      sx={{
        ...AppCss.outerGrid
      }}
    >
      <Grid item xs={12} sm={3}
        sx={{
          background: theme === 'light' ? '#FFF' : 'black',
          color: theme === 'light' ? 'black' : 'white',
          ...AppCss.innerGrid
        }}
      >
        <SideNav />
      </Grid>

      {/* Main content - Allow it to be pushed to the right on md screens and up */}
      <Grid item xs={12} sm={9}
        sx={{
          background: theme === 'light' ? '#F7F7F7' : '#131314',
          color: theme === 'light' ? 'black' : '#FAFAFA',
          ...AppCss.innerGrid2
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
