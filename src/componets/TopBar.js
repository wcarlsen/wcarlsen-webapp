import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ProfileAvatar from './ProfileAvatar';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function TopBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Willi Carlsen's website
          </Typography>
          <ProfileAvatar />
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
