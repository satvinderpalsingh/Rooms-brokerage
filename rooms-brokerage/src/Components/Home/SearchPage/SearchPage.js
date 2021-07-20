import React, {useEffect, useState } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import useStyles from '../../Card_style/styles';
import Container from '@material-ui/core/Container';
import SingleCard from "../../Card_style/SingleCard";
import Axios from 'axios';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {Button} from '@material-ui/core';
import { useHistory } from "react-router-dom";


const SearchPage = () => {

  const classes=useStyles();

  const [ads,setAds] = useState([]);

  const [msg, setMsg] = useState("Places Nearby");

  

  useEffect(() => {
    Axios.get("https://powerful-plateau-03789.herokuapp.com/userAds").then((response) => {
    // Axios.get("http://localhost:3001/userAds").then((response) => {
      console.log(response.data);
      setAds(response.data);
      if (response.data.length === 0){
        setMsg("No Ads");
      }

    });
  }, []);

  const history = useHistory();

  return (
    <React.Fragment>
    {/* <CssBaseline /> */}
    <main>
      
      
      


      {/* Hero unit */}
      <Container className={classes.cardGrid} maxWidth>
        {/* End hero unit */}
        <Grid container spacing={4}>

          {ads.map((val) => (
            <Grid item xs={12} sm={6} md={4}>


              <SingleCard
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                Adtitle = {val.Adtitle}                  
                address={val.address}
                no_bedrooms={val.no_bedrooms}
                capacity={val.capacity}  
                phone_no={val.phone_no}
                facilities={val.facilities}            
                description={val.description}
                cost={val.cost}
              />



            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={4}>






          </Grid>


        </Grid>

      </Container>
    </main>
  </React.Fragment>
    );
  }


export default SearchPage;