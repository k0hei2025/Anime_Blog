import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container, Grid} from "@material-ui/core"
import Button from "@material-ui/core/Button"
import TextAreaAutosize from "@material-ui/core/TextareaAutosize"
import pink from '@material-ui/core/colors/pink';
import { amber } from '@material-ui/core/colors';
import Typography from "@material-ui/core/Typography"
const color = pink[800];
const formColor = amber[500];
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '32ch',
    },
    backgroundColor:"white",
    borderRadius:"12px",
    paddingBottom:"45px",
    paddingTop:"45px",
    

},
   
   background:{
       backgroundColor:color,
    
       padding:"19%"
   },
   bottom:{
       backgroundColor:color,
       color:"white"
    },
    publish:{
        fontFamily:[
            'Luckiest Guy', "cursive"
               ],
         
    }


}));

const addButton=()=>{
  const classes = useStyles();

  return (
  <Container className={classes.background}>
  <Grid item md="12" xs="12"   > 
    <form className={classes.root} noValidate autoComplete="off">
      
      <TextField id="outlined-basic"  label="Anime Name" variant="outlined" /><br/>
      <TextField id="outlined-basic" label="Image" variant="outlined" type="file" /><br/>
      <TextAreaAutosize rowsMin={3} className={classes.publish} placeholder="Description"  aria-label="maximum height"/><br/>
      <Button variant="contained" className={classes.bottom} ><Typography className={classes.publish} variant="h5"> Publish</Typography></Button>
    </form>
    </Grid>
    </Container>
  );
}
export default addButton