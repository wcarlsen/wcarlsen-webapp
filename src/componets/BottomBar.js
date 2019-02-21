import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Email from 'mdi-material-ui/Email';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import Linkedin from 'mdi-material-ui/Linkedin';
import Instagram from 'mdi-material-ui/Instagram';
import { ButtonBase } from '@material-ui/core/ButtonBase';


const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%'
  },
};

class BottomBar extends React.Component {
  state = {
    value: null,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      < BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction component={ButtonBase} target="_blank" href="mailto:carlsenwilli@gmail.com" value="email" label="Email" icon={<Email />} />
        <BottomNavigationAction component={ButtonBase} target="_blank" href="https://github.com/wcarlsen" value="github" label="Github" icon={<GithubCircle />} />
        <BottomNavigationAction component={ButtonBase} target="_blank" href="https://www.linkedin.com/in/wcarlsen" value="linkedin" label="Linkedin" icon={<Linkedin />} />
        <BottomNavigationAction component={ButtonBase} target="_blank" href="https://www.instagram.com/willicarl" value="instagram" label="Instagram" icon={<Instagram />} />
      </BottomNavigation >
    );
  }
}

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);