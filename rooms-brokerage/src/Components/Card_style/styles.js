import { makeStyles } from "@material-ui/core";


export default makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
      },
      heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
      },
      heroButtons: {
        marginTop: theme.spacing(4),
      },
      cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(8),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardAction: {
        position: "relative",
        flexGrow: 1,
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        position: "relative",
        flexGrow: 1,
      },
      footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
      },
      h1:{
        marginInline: 24,
      },
      pos :{
        right: 10,
        position:"absolute",
      },
      location:{
        margintop: '10px',
        fontsize: '8px',
        color: 'gray',
      },
}))