import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import SingleCard from "./SingleCard";


const Ownerdashboard = () => {

  const classes=useStyles();
  
  const cards = [1, 2, 3, 4, 5];

  return (
      <React.Fragment>
      <CssBaseline />
      <main>
        <h1 className={classes.h1}>Lookout at your properties here!!</h1>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <SingleCard
                  img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                  location="Dadar"
                  title="3BHK Apartment"
                  description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                  price="₹35000 / month"
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
    );
  }


export default Ownerdashboard;
