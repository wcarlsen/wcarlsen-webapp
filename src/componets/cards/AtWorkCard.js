import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ProfileImage from './../../assets/images/profile.jpg';

const isMobile = window.innerWidth <= 500;

const styles = {
  card: {
    maxWidth: isMobile ? '100%' : '75%',
    width: isMobile ? 'auto' : 800,
    marginBottom: 15,
  },
  media: {
    height: isMobile ? 300 : 400,
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
          image={ProfileImage}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            At work
          </Typography>
          <Typography component="p">
            I work as a Site Reliability Engineer at DFDS. Here I'm responsible for developing a good DevOps culture and maintaining cloud resources such as AWS EKS (Kubernetes cluster), selfservice portal for onboarding developers and other cloud tools and infrastructure. Since we utilize Kubernetes we specialize in containers and Linux. I have a background as a Data Engineering (@DFDS), Data Scientist (@SimpleSite) and Growth Hacker (@SimpleSite), but slowly transitioned into a more DevOps role and I have never been happier.
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
