import React, { useState } from 'react';
import { Grid, Typography, Dialog , DialogContent, DialogTitle  } from '@mui/material'

const ProjectCard = ({ img }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleImageClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      <img src={img} alt='img' style={{ width: '20vw', height: '50vh', borderRadius: '10px' }}  onClick={handleImageClick} />
      {isHovered && (
        <Typography variant='h6' style={{ margin: '10px', textAlign: 'center', color: 'white' }}>
          project
        </Typography>
      )}
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <DialogTitle>Project Description</DialogTitle>
        <DialogContent>
          {/* Add your project description content here */}
          <Typography variant="body1">
            This is the project description.
          </Typography>
        </DialogContent>
      </Dialog>
    </Grid>
  );
};


export default ProjectCard
