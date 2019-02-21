import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ProfileImage from './../assets/images/profile.jpg';

const styles = {
  avatar: {
    margin: 10,
  },
};

function ProfileAvatar(props) {
  const { classes } = props;
  return (
    <Avatar alt="Willi Carlsen" src={ProfileImage} className={classes.avatar} />
  );
}

ProfileAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileAvatar);