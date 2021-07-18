import React, { Component, useEffect, useState } from "react";
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
import Axios from 'axios';


const Ownerdashboard = () => {

  const classes=useStyles();
  
  const cards = [1, 2, 3, 4, 5];

  const [ads,setAds] = useState([]);

  const email = localStorage.getItem("email");

  const [msg, setMsg] = useState("Lookout at your properties here!!");

  useEffect(() => {
    Axios.get("http://localhost:3001/ownerAds",{params: {getemail: email}}).then((response) => {
      console.log(response.data);
      setAds(response.data);
      if (response.data.length === 0){
        setMsg("No Ads");
      }

    });
  }, []);

  

  return (
      <React.Fragment>
      <CssBaseline />
      <main>
        <h1 className={classes.h1}>{msg}</h1>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth>
          {/* End hero unit */}
          <Grid container spacing={4}>
            
            {ads.map((val) => (
              <Grid item xs={12} sm={6} md={4}>               
                  

                    <SingleCard
                      img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                      location = {val.area}
                      title={val.Adtitle}
                      description = {val.description}
                      price = {val.cost}
                    />  
                    

                
                
              </Grid>
            ))}
            <a href = "/OwnerUpload">Post Your Ad</a>
            
          </Grid>
        </Container>
      </main>
    </React.Fragment>
    );
  }


export default Ownerdashboard;
