import React from 'react';
import './Banner.css';
import {Button,Paper,Grid,Container} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

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
const Banner=()=>{
    const history= useHistory();
    return (
        
        <Container>
            <Grid container direction='row'>
                <Grid item sm={6}>
                <div className='banner1__info'>
                    <h1>Get out and Stretch your imagination</h1>
                    <h4>Find out new places to rent near you</h4>
                    <Button onClick={ ()=>history.push('/search')} variant='outlined'>Explore Nearby</Button>
                </div>
                </Grid>
                <Grid item sm={6}>
                <div className='banner1__info'>
                    <h1>Looking For Your Dream Home?</h1>
                    <h4>Here is our curated list of properties available at best price</h4>
                    <Button onClick={ ()=>history.push('/searchb')} variant='outlined'>Find Out</Button>
                </div>
                </Grid>
            </Grid>
        </Container>
        );
}


export default Banner;

