import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import registerStyles from './registerStyles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import { FormControl } from '@material-ui/core';
import createBrowserHistory from 'history/createBrowserHistory';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}

        Slack
      
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignUp() {
  const classes = registerStyles();

  const [firstnameReg, setFirstnameReg] = useState('');
  const [lastnameReg, setLastnameReg] = useState('');
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  const [notificationReg, setNotificationReg] = useState('');

  


  const history = createBrowserHistory({forceRefresh:true});
  
  const register = () => {



    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailReg)) {
        Axios.post('http://localhost:3001/register', {
        firstname : firstnameReg,
        lastname : lastnameReg,
        email : emailReg,
        notification : notificationReg,
        password : passwordReg
      }).then((response)=> {
        console.log(response.data);
        
        alert(response.data.message);
        localStorage.setItem("isauth",false);
        history.push('/login');
        
      });
    }
    else{
      alert("Wrong Email!")
    }


    
  };

  return (
    <Container  component="main" maxWidth="xs">
     
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <FormControl className={classes.form} noValidate post>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange = {(e)=> {
                  setFirstnameReg(e.target.value);
                }}
                
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required = {true}
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange = {(e)=> {
                  setLastnameReg(e.target.value);
                }}
                 
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required = {true}
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange = {(e)=> {
                  setEmailReg(e.target.value);
                }}
                
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required = {true}
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange = {(e)=> {
                  setPasswordReg(e.target.value);
                }}
                
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
                onChange = {(e)=> {
                  
                  setNotificationReg(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type = "submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {register}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Log in
              </Link>
             
            </Grid>
          </Grid>
        </FormControl>
      </div>
     
    </Container>
  );
}