import React, { useState, useEffect } from 'react';
import { Grid, Typography, Dialog, DialogContent, DialogTitle } from '@mui/material';

const ProjectCard = ({ img }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

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
    borderRadius: '10px',
    cursor: 'pointer',
    ...(isHovered && { transform: 'scale(1.1)' }), // Apply transform on hover
    transition: 'transform 0.15s ease-in-out',
  };

  const textContainerStyle = {
    position: 'absolute',
    top: cursorPosition.y - 180, // Slightly below cursor
    left: cursorPosition.x - 480, // Centered horizontally with cursor
    zIndex: 999,
    pointerEvents: 'none',
  };

  return (
    <Grid
      style={gridStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      padding={2}
    >
      <img src={img} alt='img' style={{ width: '30vw', height: '50vh', borderRadius: '10px', objectFit: 'cover' }} onClick={handleImageClick} />
      {isHovered && (
        <div >
          <Typography variant='h6' style={{ textAlign: 'center', color: 'white' }}>
            project
          </Typography>
        </div>
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

export default ProjectCard;
