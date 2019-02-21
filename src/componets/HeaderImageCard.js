import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import ProfileImage from './../assets/images/profile.jpg';
import CVFile from './../assets/files/Willi_Carlsen_CV.pdf';

const isMobile = window.innerWidth <= 500;

const styles = {
  card: {
    maxWidth: isMobile ? '100%' : '75%',
  },
  media: {
    height: isMobile ? 300 : 450,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardMedia
          className={classes.media}
          image={ProfileImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            About me
          </Typography>
          <Typography component="p">
            Responsible for building and dockerizing machine learning web applications, deployments of these into AWS and Kubernetes and monitorization of all deployments. Introducing best practices from software development into the area of data science, reducing complexity, risks and future need for maintenance, by e.g. introducing code reviews, regular architecture/implementation discussions and having a fast and easy deployment cycle.
          </Typography>
        </CardContent>
        <CardActions>
          <Button href={CVFile} download size="small" color="primary">
            Download CV
        </Button>
        </CardActions>
      </Card >
    </Grid>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);