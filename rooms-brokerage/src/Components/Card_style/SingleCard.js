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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function SingleCard({
  img,
  Adtitle,
  address,
  no_bedrooms,
  capacity,
  phone_no,
  email,
  facilities,
  description,
  cost
}) {
  const classes = useStyles();
  return (
    <Card elevation={20} className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={img}
        title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography display="block" alignCenter>
          {Adtitle}
        </Typography>
        <Typography /*className={classes.pos}*/ gutterBottom>
          Cost:{cost}/month
        </Typography>
        <p>____</p>
        <Typography  /*className={classes.pos}*/>
          Contact:{phone_no}
        </Typography>
        <Typography  /*className={classes.location}*/ gutterBottom display="block">
          Address:{address}
        </Typography>
        
        <p>____</p>
        <Typography  /*className={classes.pos}*/>
          Number of bedrooms:{no_bedrooms}
        </Typography>
        <Typography  /*className={classes.pos}*/>
          capacity:{capacity}
        </Typography>
        <p>____</p>
        <Typography  /*className={classes.location}*/>
          {description}
        </Typography>
        <Typography  /*className={classes.location}*/>
          {facilities}
        </Typography>
      </CardContent>
      {/* <CardActions className={classes.cardAction}>
        <Button size="small" color="primary">
          edit
        </Button>
        <FormControlLabel className={classes.pos} control={<Switch />} label="Available" labelPlacement="start"/>
      </CardActions> */}
    </Card>
  );

}


export default SingleCard;
