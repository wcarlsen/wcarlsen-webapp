import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
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

function CVCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Curriculum vitae
          </Typography>
          <Typography component="p">
            Please download my CV below.
          </Typography>
          <CardActions>
            <Button href={CVFile} download size="small" color="primary">
              Download CV
            </Button>
          </CardActions>
        </CardContent>
      </Card >
    </Grid>
  );
}

CVCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CVCard);