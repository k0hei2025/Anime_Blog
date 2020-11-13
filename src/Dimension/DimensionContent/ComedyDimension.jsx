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
        backgroundImage:`url(${"https://thumbs.gfycat.com/DeliciousAshamedGoa.webp"})`,  
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
        Comedy
    </Typography>
    </Grid>
    <Grid item md="12" xs="12" className={ classes.contentContainer}>
 <Typography  variant="h5" className={ClassNames(classes.Typography , classes.writing) }>    e comedy type anime makes you feel very confident and easy type life you are full relaxed feel
                      when you watch comedy anim
 </Typography>
    </Grid>
    <Grid item md="12" xs="12" >
  
  </Grid>
    </Container>
    )}
export default shonen