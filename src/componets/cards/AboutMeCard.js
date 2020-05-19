import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import AboutImage from './../../assets/images/about.jpg';

const isMobile = window.innerWidth <= 500;

const styles = {
  card: {
    maxWidth: isMobile ? '100%' : '75%',
    width: isMobile ? 'auto' : 800,
    marginBottom: 15,
  },
  media: {
    height: isMobile ? 300 : 600,
  },
  content: {
    paddingBottom: 100
  }
};

function AboutMeCard(props) {
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
            About me
          </Typography>
          <Typography component="p">
            I am 32 years old and I work as a Site Reliability Engineer at DFDS. I live in Copenhagen on Nørrebro with my girlfriend and two sons. My spare time is spend on family, friends, fishing, computers, gaming, programming, Linux, the command line, Open-Source software, cloud computing/infrastructure, kayaking, sailing and much more.
          </Typography>
        </CardContent>
      </Card >
    </Grid>
  );
}

AboutMeCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutMeCard);
