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
    <Grid container xs={12}>
      <Grid item xs={3} style={{ position: 'fixed', height: '100vh', width: '28vw',zIndex: 1,  backgroundColor: 'black'}}>
        <SideNav />
      </Grid>
      <Grid item xs={9} style={{ marginLeft: '24vw', padding: '20px', width: '72vw',overflowY: 'auto', height: '100vh', backgroundColor: '#131314' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          {/* <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} /> */}
        </Routes>
      </Grid>
    </Grid>



  );
}

export default App;
