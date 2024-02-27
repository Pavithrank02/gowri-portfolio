import React, { useState, useEffect } from 'react';
import { Grid, Typography, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { ThreeDCardDemo } from './P';

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
    console.log("truye")
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const gridStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    borderRadius: '10px',
    cursor: 'pointer',
    ...(isHovered && { transform: 'scale(1)', }), // Apply transform on hover
    transition: 'transform 0.15s ease-in-out',
  };

  const textContainerStyle = {
    position: 'absolute',
    top: cursorPosition.y - cursorPosition, // Slightly below cursor
    left: cursorPosition.x - cursorPosition, // Centered horizontally with cursor
    zIndex: 999,
    pointerEvents: 'none',
  };

  return (
    <Grid
      style={gridStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Grid
        onClick={handleImageClick}
        onBlur={handleCloseModal}
        open={isModalOpen}>
        <ThreeDCardDemo />
      </Grid>
      {isHovered && (
        <div style={textContainerStyle}>
          <Typography variant='h6' style={{ textAlign: 'center', color: 'white' }}>
            Project
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
