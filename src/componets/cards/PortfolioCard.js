import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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
  },
  portfolio: {
    marginTop: 20,
    marginBottom: 20
  }
};

function PortfolioCard(props) {
  const { classes } = props;
  return (
    <Grid container justify='center'>
      <Card className={classes.card} elevation={5} >
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="h2">
            Portfolio
          </Typography>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <b>Data Engineer @DFDS</b><br/>
              <u>2018-2019:</u> <i>Migrate web apps/API's to Kubernetes</i>
            </Typography>
            <Typography component="p">
              The Development Excellence team within DFDS has deployed it's own Kubernetes cluster (with batteries included) in order to drive some of DFDS IT strategies: composable architecture and cloud first. In alignment with this initiative I have (mainly in my spare time) ported our two web applications from AWS Elastic Beanstalk to the Kubernetes cluster in order to utilize some of the great extra goodies that this setup posseses, plus the gain of future support. It required a lot of refacturing and testing of our current applications, the introduction of a middleware that reapplys the path-prefix that the Traefik ingress controller removes and the exposure of Prometheus metrics used to implement e.g. alarms.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <u>2018-2019:</u> <i>Replace Google distance matrix API component with internal tool</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <u>2018:</u> <i>AWS alarms/warnings</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <u>2018:</u> <i>HTTPS for AWS Elastic Beanstalk apps</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <u>2018:</u> <i>Maturing frontend and API</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <u>2018:</u> <i>Introducting some of developments best pratices</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <u>2018:</u> <i>Introduce daily/weekly stand ups</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <u>2018:</u> <i>Build Iterable API intregration</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <b>Growth hacker/Data scientist @SimpleSite</b><br/>
              <u>2017-2018:</u> <i>Build and support Marketing tracking and metrics platform</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <u>2017-2018:</u> <i>Port advanced tracking setup to new web API for Angular SPA</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
          <div className={classes.portfolio}>
            <Typography variant="h6" component="h2">
              <u>2017-2018:</u> <i>Build and maintain definitions data layer on top of data warehouse</i>
            </Typography>
            <Typography component="p">
              Insert text.
            </Typography>
          </div>
        </CardContent>
      </Card >
    </Grid>
  );
}

PortfolioCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PortfolioCard);
