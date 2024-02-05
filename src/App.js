import './App.css';
import SideNav from './components/SideNav';
import { Routes, Route } from 'react-router-dom'
import About from './view/About';
import Contact from './view/Contact';
import Home from './view/Home';
import Project from './view/Project';
import { Grid } from '@mui/material';

function App() {
  return (
    <Grid container position={'fixed'}>
      <Grid xs={3} >
        <SideNav />
      </Grid>
      <Grid xs={9} style={{backgroundColor: '#131314'}}>

        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Grid>
    </Grid>
  );
}

export default App;
