import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Typography from '@material-ui/core/Typography';
import ProfileAvatar from './ProfileAvatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Information from 'mdi-material-ui/Information';
import FileDocument from 'mdi-material-ui/FileDocument';
import Home from 'mdi-material-ui/Home';
import Code from 'mdi-material-ui/CodeNotEqualVariant';
import Worker from 'mdi-material-ui/Worker';
import FormatListBulleted from 'mdi-material-ui/FormatListBulleted';


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
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TopBar extends React.Component {
  state = {
    left: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {

    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem onClick={() => this.props.changeContent("about")} button key="About me">
            <ListItemIcon>
              <Information />
            </ListItemIcon>
            <ListItemText primary="About me" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("home")} button key="At home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="At home" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("work")} button key="At work">
            <ListItemIcon>
              <Worker />
            </ListItemIcon>
            <ListItemText primary="At work" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("portfolio")} button key="Portfolio">
            <ListItemIcon>
              <FormatListBulleted />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("skills")} button key="Skills">
            <ListItemIcon>
              <Code />
            </ListItemIcon>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem onClick={() => this.props.changeContent("cv")} button key="CV">
            <ListItemIcon>
              <FileDocument />
            </ListItemIcon>
            <ListItemText primary="CV" />
          </ListItem>
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
              <MenuIcon />
            </IconButton>
            <SwipeableDrawer open={this.state.left} onClose={this.toggleDrawer('left', false)} onOpen={this.toggleDrawer('left', true)}>
              <div
                tabIndex={0}
                role="button"
                onClick={this.toggleDrawer('left', false)}
                onKeyDown={this.toggleDrawer('left', false)}
              >
                {sideList}
              </div>
            </SwipeableDrawer>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Willi Carlsen's website
            </Typography>
            <ProfileAvatar />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
