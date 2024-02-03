import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material'

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
    ...(isHovered && { transform: 'scale(1.2)' }), // Apply transform on hover
    transition: 'transform 0.15s ease-in-out',
  };

  return (
    <Grid
      style={gridStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={img} alt='img' style={{ width: '20vw', height: '50vh', borderRadius: '10px' }} />
      {isHovered && (
        <Typography variant='h6' style={{ margin: '10px', textAlign: 'center', color: 'white' }}>
          project
        </Typography>
      )}
    </Grid>
  );
};


export default ProjectCard
