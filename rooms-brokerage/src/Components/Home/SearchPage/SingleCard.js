import React from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';

function SingleCard ({
   img,
   location,
   description,
   title,
   price,
})

{
    const classes=useStyles();
  return (
                <Card elevation={20} className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={img}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography className={classes.pos}>
                     {price}
                    </Typography>
                    <Typography className={classes.location} gutterBottom >
                      {location}
                    </Typography>
                    <Typography>
                     {title}
                    </Typography>
                    <p>____</p>
                    <Typography className={classes.location}>
                     {description}
                    </Typography>
                  </CardContent>
                </Card>
  );

  }


export default SingleCard;
