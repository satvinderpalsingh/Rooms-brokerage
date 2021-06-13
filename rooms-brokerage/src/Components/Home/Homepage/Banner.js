import React from 'react';
import './Banner.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchBar from "material-ui-search-bar";

/*function Banner()  {
    const history= useHistory();
    return (
    <div className='banner'>
        <div className='banner1'>
            <div className='banner1__info'>
            <h1>Get out and Stretch your imagination</h1>
            <h4>Find out new places to rent near you</h4>
            <Button onClick={ ()=>history.push('/search')}
             variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
        <div className='banner2'>
            <div className='banner2__info'>
            <h1>Looking For Your Dream Home?</h1>
            <h4>Here is our curated list of properties available at best price</h4>
            <Button onClick={ ()=>history.push('/searchb')}
            variant='outlined'>Find Out</Button>
            </div>
        </div>

    </div>
    );
}*/
export default function CarouselSlide(props) {
    
    
  const { src,title,price,description} = props.content;
   /* const useStyles = makeStyles(() => ({
        card: {
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '500px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        } 
    }));*/
    const styles = {

      img:{
        height:'100%',
        width:'100%'
      },
      card: {
         position: 'relative',
            width: '100%',
            height:'100%',
            display: 'flex',
            justifyContent: 'center'
      },
      overlay: {
         position: 'absolute',
         top: '20px',
         left: '20px',
         color: 'black',
         
      },
      
   }

    /*const classes = useStyles();*/

    return (

        <Card >
      <CardActionArea style={styles.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          image={src}
          title={title}
        />
        <CardContent style={styles.overlay}>
        <Typography gutterBottom variant="h4" component="h2">
            {title}
          </Typography>
          <Typography  variant="h5" component="p">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {price}
          </Typography>
          <SearchBar  placeholder="Enter your location"/>
        </CardContent>
      </CardActionArea>
      </Card>
      

    );
}




