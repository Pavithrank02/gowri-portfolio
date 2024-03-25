import './App.css';
import SideNav from './components/SideNav/SideNav';
import { Routes, Route } from 'react-router-dom'
import About from './view/About';
import Contact from './view/Contact';
import Home from './view/Home';
import Project from './view/Project';
import { Grid } from '@mui/material';
import Service from './view/Service';
import { useTheme } from './ThemeContext';
import { AppCss } from './constants';


function App() {
  const { theme } = useTheme();

  return (
    <Grid container xs={12}
      sx={{ ...AppCss.outerGrid }}
    >
      <Grid item xs={3}
        sx={{ ...AppCss.innerGrid2 }}
        style={{ background: theme === 'light' ? '#FFF' : 'black', color: theme === 'light' ? 'black' : 'white' }}
      >
        <SideNav />
      </Grid>
      <Grid item xs={9}
        style={{ background: theme === 'light' ? '#F7F7F7 ' : '#131314', color: theme === 'light' ? 'black' : '#FAFAFA' }}
        sx={{ ...AppCss.innerGrid }}>
        <Grid item>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
          </Routes>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default App;
