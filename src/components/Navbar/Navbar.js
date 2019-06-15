import React, { memo } from 'react';
import { Typography, AppBar, Toolbar, Button } from '@material-ui/core';

const Navbar = memo(props => (
  <div style={{ flexGrow: 1 }}>
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
          GridGuess
        </Typography>
        <Button
          onClick={props.onSettingsClick}
          style={{ marginRight: 'theme.spacing(2)' }}
          color="inherit"
        >
          Settings
        </Button>
      </Toolbar>
    </AppBar>
  </div>
));

export default Navbar;
