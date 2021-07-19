import React, { useState, useEffect } from 'react';
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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Axios, { AxiosResponse, AxiosInstance } from 'axios';


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


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {

 
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  const history = createBrowserHistory({forceRefresh:true});

  

  Axios.defaults.withCredentials = true;

  


  const [msg, setMsg] = useState('');

  const login = () => {
    Axios.post('http://localhost:3001/login', {   

      email : email,      
      password : password

    }).then((response)=> {

      
      if (!response.data.auth){
        console.log(response.data);
        setMsg(response.data.message);
        localStorage.setItem("isauth", false);       
      }
      else{
        console.log(response.data);
        localStorage.setItem("token", response.data.token)        
        localStorage.setItem("isauth", true);
        localStorage.setItem("email",email);
        setMsg(response.data.msg);
            
        history.push('/Ownerdashboard');   
        
      }
      
    });

    
  };



  
  return (
    
    <Container component="main" maxWidth="xs">
      
      
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in 
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required = {true}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange = {(e)=> {                  
                setEmail(e.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required = {true}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = {(e)=> {                  
                setPassword(e.target.value);
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick = {login}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='/register' variant="body2">
                "Don't have an account? Sign Up"
              </Link>
            </Grid>
          </Grid>
        </form>
        <h4>{msg}</h4>
      </div>
      
    </Container>
  );
}