import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AboutImage from './../../assets/images/home.jpg';

const isMobile = window.innerWidth <= 500;

const styles = {
  card: {
    maxWidth: isMobile ? '100%' : '75%',
    width: isMobile ? 'auto' : 600,
    marginBottom: 15,
  },
  media: {
    height: isMobile ? 400 : 600,
  },
  content: {
    paddingBottom: 100
  }
};

function AtHomeCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={AboutImage}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            At home
          </Typography>
          <Typography component="p">
            I live with my small family (girlfriend Terese and two sons Anker and Jens) in an appartment in Copenhagen on Nørrebro. Here we enjoy having friends, family and all the opportunities the city offers close by.
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

AtHomeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AtHomeCard);
