import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container, Grid} from "@material-ui/core"
import Button from "@material-ui/core/Button"
import TextAreaAutosize from "@material-ui/core/TextareaAutosize"
import { blue } from '@material-ui/core/colors';
import Typography from "@material-ui/core/Typography"


const formColor = blue[500];
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
    
       padding:"19%"
   },
   bottom:{
       backgroundColor:formColor,
       color:"white"
    },
    publish:{
        fontFamily:[
            'Luckiest Guy', "cursive"
               ],
         
    }


}));


const addButton= ({AddAnime}) => {


  const [nameState , setNameState] = useState('')
const [imageState , setImageState] = useState('')
const [descriptionstate , setDescriptionState] = useState('')

const nameChangeHandler=(event)=>{
setNameState(event.target.value)
}
const imageChangeHandler=(event)=>{
setImageState(event.target.value)
}
const descriptionChangeHandler=(event)=>{
setDescriptionState (event.target.value)
}




const submitHandler=(event)=>{

event.preventDefault();
console.log(nameState , imageState , descriptionstate)
AddAnime.AddAnime({AnimeName: nameState , Image: imageState , Description: descriptionstate});
}


  const classes = useStyles();

  

  return (
  <Container className={classes.background}>
  <Grid item md="12" xs="12"   > 
    <form onSubmit={submitHandler} className={classes.root} noValidate autoComplete="off">
      
    <label htmlFor="AnimeName">
      <TextField id="outlined-basic" 
      label="Anime Name"
        variant="outlined" 
        value={nameState}
        onChange={nameChangeHandler} />
          </label><br/>
    
    <label htmlFor="Image">
      <TextField id="outlined-basic" 
      label="Image" variant="outlined"
        type="file" value={imageState} 
        onChange={imageChangeHandler} />
        </label><br/> 
  
    <label htmlFor="Description"> 
    <TextAreaAutosize rowsMin={3} 
    className={classes.publish} 
    placeholder="Description"
      value={descriptionstate} 
      onChange={descriptionChangeHandler}
      aria-label="maximum height"/>
      </label><br/>
      
      <Button variant="contained" 
      className={classes.bottom}
      type="submit" >
      <Typography  className={classes.publish} variant="h5"> Publish</Typography></Button>
  
    </form>
    </Grid>
    </Container>
  
);
}
export default addButton