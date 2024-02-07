import './App.css';
import SideNav from './components/SideNav';
import { Routes, Route } from 'react-router-dom'
import About from './view/About';
import Contact from './view/Contact';
import Home from './view/Home';
import Project from './view/Project';
import { Grid } from '@mui/material';
import Section from './components/Scroll';

function App() {
  return (
    <Grid container xs={12} >
      <Grid item xs={3} style={{ height: '100vh', backgroundColor: 'black'}}>
        <SideNav />
      </Grid>
      <Grid item xs={9} style={{ overflowY: 'auto', height: '100vh', backgroundColor: '#131314' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/s' element={<Section />} />
        </Routes>
      </Grid>
    </Grid>



  );
}

export default App;
