import React, { useState,useEffect,Component } from "react";
import { FormGroup,FormControlLabel,Switch,FormControl,InputLabel,Select,TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';


import useStyles from './styles';

const Ownerupload = () => {

  const [postData, setPostData] = useState({
    name: '',
    surname: '',
    address: '',
    area: '',
    price: '',
    email: '',
    phone: '',
    facilities: '',
    description: '',
    selectedFile: ''
  });

  const classes=useStyles();
  

  const [state, setState] = useState({
    bedroom: '',
    capacity: '',
    action: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };


  return(
    <Paper className={classes.paper}  elevation={10}>
      <form className={`${classes.root} ${classes.form}`}> 
        <Typography variant="h4">Property Details</Typography>
        <FormGroup row>
        <TextField label="Name" value={postData.name} onChange={(e) => setPostData({...postData, name: e.target.value})}/>
        <TextField label="Surname" value={postData.surname} onChange={(e) => setPostData({...postData, surname: e.target.value})}/>
        </FormGroup>
        <FormGroup row>
        <TextField label="Address" fullWidth value={postData.address} onChange={(e) => setPostData({...postData, address: e.target.value})}/>
        </FormGroup>



        <FormGroup row>
        <div>
        <FormControl className={classes.formcontrol}>
        <InputLabel htmlFor="no-of-bedroom" >No. of Bedrooms</InputLabel>
        <Select
         native
          value={state.bedroom}
          onChange={handleChange}
          inputProps={{
            name: 'bedroom',
            id: 'no-of-bedroom',
          }}
        >
          <option aria-label="None" value=""/>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value="more">more</option>
        </Select>
        </FormControl>



        <FormControl className={classes.formcontrol}>
        <InputLabel htmlFor="no-of-people" >Capacity(no. of people)</InputLabel>
        <Select
          native
          value={state.capacity}
          onChange={handleChange}
          inputProps={{
            name: 'capacity',
            id: 'no-of-people',
          }}
        > 
          <option aria-label="None" value=""/>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>more</option>
        </Select>
        </FormControl>


        <FormControl className={classes.formcontrol}>
        <InputLabel htmlFor="action-to-do">Action</InputLabel>
        <Select
          native
          value={state.action}
          onChange={handleChange}
          inputProps={{
            name: 'action',
            id: 'action-to-do',
          }}
        >
          <option aria-label="None" value=""/>
          <option>Sell</option>
          <option>Rent</option>
          <option>Both(Sell/Rent)</option>
        </Select>
        </FormControl>
        </div>


        </FormGroup>
        <FormGroup row>
        <TextField label="Approx. area in sqft." width={25} value={postData.area} onChange={(e) => setPostData({...postData, area: e.target.value})}/>
        <TextField label="Price/Month" width={25} value={postData.price} onChange={(e) => setPostData({...postData, price: e.target.value})}/>
        </FormGroup>
        <FormGroup row>
        <TextField label="E-mail Id" width={25} value={postData.email} onChange={(e) => setPostData({...postData, email: e.target.value})}/>
        <TextField label="Phone no." width={25} value={postData.phone} onChange={(e) => setPostData({...postData, phone: e.target.value})}/>
        </FormGroup>
        <TextField label="Facilities(seperated by comma)" fullWidth value={postData.facilities} onChange={(e) => setPostData({...postData, facilities: e.target.value})}/>
        <div className={classes.file}>
        <label>Upload image:</label>
        <span><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedFile:base64})} /></span>
        </div>
        <TextField variant="outlined" label="brief desciption about the property" fullWidth multiline rows={4} value={postData.description} onChange={(e) => setPostData({...postData, description: e.target.value})}/>
        <Button className={classes.button} variant="contained" color="primary" size="large" type="submit"  >Add Property</Button>
      </form>
    </Paper>
  );
}

export default Ownerupload;
