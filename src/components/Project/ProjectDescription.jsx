import { GitHub } from '@mui/icons-material'
import { Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ProjectDescription = () => {
  return (
    <Grid container
      style={{ display: 'flex', flexDirection: "column", width: "30vw" }}>
      <Grid item>
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="800"
          width="800"
          className="element"
          alt="thumbnail"
        />
      </Grid>
      <Grid>
        <Typography variant="h5">
          Project Name
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="h6">
          Date
        </Typography>
      </Grid>
      <Grid item
      >
        <Typography variant="body1">
          MERN Stack based chat application which is used by user for chatting and once the user are registered they can able to chat with other registered users. All user information and chats will be handled in Mongodb. User interaction will be made through Socket.io.
        </Typography>
      </Grid>
      <Grid item style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Grid style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <IconButton color="inherit" >
            <Typography variant="body1">
              View Code
            </Typography>
            <GitHub />
          </IconButton>
        </Grid>
        <Grid >
          <Link to="" style={{ textDecoration: 'none', color: "black" }}>
            <Typography variant="body1" sx={{ textDecoration: 'none' }}>
              Live Link
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ProjectDescription