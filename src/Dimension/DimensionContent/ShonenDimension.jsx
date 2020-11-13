import React from "react"
import {Grid} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import ClassNames from "classnames"
import Container from "@material-ui/core/Container"
const useStyles = makeStyles({
    contentContainer:{
        borderWidth:"2px",
     paddingTop:"5%",    
     fontFamily: ['Syne Tactile', 'cursive']

     
    }
    ,
    Typography:{
        width:"50%",
        marginLeft:"25%",
    
    },

    writing:{
        fontFamily:["Syne Tactile",  "cursive"],

    },

    Image:{
        backgroundImage:`url(${"https://media1.tenor.com/images/ec8df4f11bd1fe98b9046ca2b6fb7167/tenor.gif?itemid=10286933"})`,  
 backgroundSize:"cover",
    padding:"18%",
    fontWeight:"bold",
    fontfamily:[
        
  ],
}


})


const shonen=()=>{
    const classes = useStyles()
    return (
   <Container maxWidth="xl" className={classes.Image} >
   <Grid item md="12" xs="12">
   <Typography variant="h1" className={classes.writing}>
        Shonen
    </Typography>
    </Grid>
    <Grid item md="12" xs="12" className={ classes.contentContainer}>
 <Typography  variant="h5" className={ClassNames(classes.Typography , classes.writing) }>    shonen anime is like a action tye anime which have long and intresting series but no romentic and love some have revenge love present it is almost see boys which have straight stories
 </Typography>
    </Grid>
    <Grid item md="12" xs="12" >
  
  </Grid>
    </Container>
    )}
export default shonen