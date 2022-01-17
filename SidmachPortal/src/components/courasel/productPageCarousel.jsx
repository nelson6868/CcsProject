import React from 'react';

import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import microsoft from '../../assets/Office-365-is-now-Microsoft-365-shutterstock_1487706341-1024x683 1.png';


const useStyles = makeStyles((theme) => ({
  image: {
    position: 'absolute',
    width: '100%',
    height: '60vh',
    padding: "0px"

  },
}));

const Carousel = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.Grid} style={{ margin: "0px" }}>
        <Grid item lg={12} sm={12} style={{ padding: "0px" }}>
          <img className={classes.image} src={microsoft} alt="Microsoft-img" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Carousel;