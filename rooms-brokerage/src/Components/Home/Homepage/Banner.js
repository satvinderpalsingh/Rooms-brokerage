import React from 'react';
import './Banner.css';
import {Button} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

function Banner()  {
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
}


export default Banner;