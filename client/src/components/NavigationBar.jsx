import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Issue Tracker
        </Typography>
        {/* Add more navigation items here */}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;

