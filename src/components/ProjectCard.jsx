import React, { useState } from 'react';
import { Grid, Typography, Dialog, DialogContent, DialogTitle } from '@mui/material'

const ProjectCard = ({ img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  };

  return (
    <Grid
      style={gridStyle}
    >
      <img src={img} alt='img' style={{ width: '20vw', height: '50vh', borderRadius: '10px' }} onClick={handleImageClick} />
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
