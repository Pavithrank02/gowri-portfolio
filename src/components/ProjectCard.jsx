import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const ProjectCard = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const gridStyle = {
    display: 'flex',
    backgroundColor: 'white',
    width: '20vw',
    height: '50vh',
    marginTop: '10vh',
    borderRadius: '10px',
    marginRight: '10px',
    cursor: 'pointer',
    ...(isHovered && { transform: 'scale(3)' }), // Apply transform on hover
    transition: 'transform 0.15s ease-in-out',
  };

  return (
    <Grid
      style={gridStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt='img' style={{ width: '20vw', height: '50vh', borderRadius: '10px' }} />
    </Grid>
  );
};


export default ProjectCard
