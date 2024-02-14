import './App.css';
import SideNav from './components/SideNav';
import { Routes, Route } from 'react-router-dom'
import About from './view/About';
import Contact from './view/Contact';
import Home from './view/Home';
import Project from './view/Project';
import { Grid } from '@mui/material';
import Section from './components/Scroll';
import Service from './view/Service';
import { useTheme } from './ThemeContext';
import Toggle from './components/ToggleButton';

function App() {
  const { theme } = useTheme();

  return (
    <Grid container xs={12} style={{ height: '100vh', display: 'flex', flexDirection: 'row' }}>
      <Grid item xs={3} style={{ overflowY: 'auto', background: theme === 'light' ? '#FFF' : 'black', color: theme === 'light' ? 'black' : 'white' }}>
        <SideNav />
      </Grid>
      <Grid item xs={9} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', overflowY: 'auto', background: theme === 'light' ? '#F7F7F7 ' : '#131314', color: theme === 'light' ? 'black' : '#FAFAFA' }}>
        <Grid>
          <Toggle />

        </Grid>
        <Grid>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/s' element={<Section />} />
            <Route path='/service' element={<Service />} />
          </Routes>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default App;
