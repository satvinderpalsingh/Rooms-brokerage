import React, { useState } from 'react';
import './Home.css';
import Banner from './Banner.js';
import {Grid,Button} from '@material-ui/core';
import { SLIDE_INFO } from './constant';
import { Slide } from '@material-ui/core';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
/*function Home() {
    return (
        <div className='home'>
            <Banner />
            <Grid container spacing={24}>
                <Grid container item xs={12} sm={4}>
                    <Card
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        title="Real Time Support"
                        description="We provide real-time support to our users."
                    />
                </Grid>
                <Grid container item item xs={12} sm={4}>
                    <Card
                        src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=787&q=80"
                        title="Wide variety of living spaces"
                        description="Spaces that are more than just a place to sleep."
                    />
                </Grid>

                <Grid container item item xs={12} sm={4}>
                    <Card
                        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                        title="Entire homes"
                        description="Comfortable private places, with room for friends or family."
                    />
                </Grid>

            </Grid>

            <Grid container spacing={24}>
                <Grid item item xs={12} sm={4}>
                    <Card
                        src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                        title="Sharing Flats in Mumbai"
                        description="Divides rent alongwith space."
                        price="₹10000/month"
                    />
                </Grid>
                <Grid item item xs={12} sm={4}>
                    <Card
                        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                        title="Luxurious Penthouse"
                        description="Enjoy the amazing sights of Mumbai with stunning high-end apartments"
                        price="Starting at ₹2.5 crores"
                    />
                </Grid>
                <Grid item item xs={12} sm={4}>
                    <Card
                        src="https://media.nomadicmatt.com/2018/apartment.jpg"
                        title="Apartments for Students"
                        description="Get places to stay near your educational institute"
                        price="Starting at ₹6000/month."
                    />
                </Grid>

            </Grid>

        </div>
    );
}*/
/*const Home=()=>{
    return(
        <div className='home'>
            <Banner/>
            <Grid container spacing={24}>
                <Grid container item xs={12} sm={6}>
                    <Card
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                        title="Real Time Support"
                        description="We provide real-time support to our users."
                    />
                </Grid>
                <Grid container item  xs={12} sm={6}>
                    <Card
                        src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=787&q=80"
                        title="Wide variety of living spaces"
                        description="Spaces that are more than just a place to sleep."
                    />
                </Grid>

            </Grid>

            <Grid container spacing={24}>
                <Grid container item  xs={12} sm={6}>
                    <Card
                        src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                        title="Entire homes"
                        description="Comfortable private places, with room for friends or family."
                    />
                </Grid>
                <Grid  container item  xs={12} sm={6}>
                    <Card
                        src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                        title="Sharing Flats in Mumbai"
                        description="Divides rent alongwith space."
                        price="₹10000/month"
                    />
                </Grid>
            </Grid>
            <Grid container spacing={24}>
                <Grid container item  xs={12} sm={6}>
                    <Card
                        src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                        title="Luxurious Penthouse"
                        description="Enjoy the amazing sights of Mumbai with stunning high-end apartments"
                        price="Starting at ₹2.5 crores"
                    />
                </Grid>
                <Grid container item  xs={12} sm={6}>
                    <Card
                        src="https://media.nomadicmatt.com/2018/apartment.jpg"
                        title="Apartments for Students"
                        description="Get places to stay near your educational institute"
                        price="Starting at ₹6000/month."
                    />
                </Grid>
            </Grid>

        </div>

        );
}*/

const Home=()=>{
    
    const [index, setIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');
    const content = SLIDE_INFO[index];
    const numSlides = SLIDE_INFO.length;
    
    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };
    function Arrow(props) {
        const { direction, clickFunction } = props;
        const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;
    
        return <div onClick={clickFunction}>{icon}</div>;
    }
    return (
        <Grid>
            <Grid item xs={12}>
        <div className='App'>
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <Slide in={slideIn} direction={slideDirection}>
                <div>
                    <Banner content={content} />
                </div>
            </Slide>
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
        </div>
        </Grid>
    <div className='banner'>
        <div className='banner1'>
            <div className='banner1__info'>
            <h1>Get out and Stretch your imagination</h1>
            <h4>Find out new places to rent near you</h4>
            <Button 
             variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
        <div className='banner2'>
            <div className='banner2__info'>
            <h1>Looking For Your Dream Home?</h1>
            <h4>Here is our curated list of properties available at best price</h4>
            <Button 
            variant='outlined'>Find Out</Button>
            </div>
        </div>

    </div>
    
</Grid>
    )
}
export default Home;