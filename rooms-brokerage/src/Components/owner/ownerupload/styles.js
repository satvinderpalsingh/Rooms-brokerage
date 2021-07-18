import { makeStyles } from '@material-ui/core'


export default makeStyles((theme) => ({
    paper:{
        padding: theme.spacing(8),
        margin: 10,
        elevation:20,
    },
    root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(1),
    },
},
formcontrol: {
    margin: theme.spacing(1),
    minWidth: 195,
},
button:{
    marginTop: 10,
},

file:{
    margin: '20px 0 10px 10px',
},

}))