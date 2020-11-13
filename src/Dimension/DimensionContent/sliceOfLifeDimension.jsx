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
       color:"purple",
       fontWeight:"bold"
    },

    writing:{
        fontFamily:["Syne Tactile",  "cursive"],
        color:"white"
    },

    Image:{
        backgroundImage:`url(${"https://media3.giphy.com/media/b29IZK1dP4aWs/giphy.gif?cid=ecf05e47havsxq1ek307l98qlzl8cxqdkvnpoupj176y523e&rid=giphy.gif"})`,  
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
        Slice Of Life
    </Typography>
    </Grid>
    <Grid item md="12" xs="12" className={ classes.contentContainer}>
 <Typography  variant="h5" className={ClassNames(classes.Typography , classes.writing)  }>   slice of life anime is internal heart feeling anime this anime you cant tell to
                others how you feel and what you think but you can feel the emotions and complexity life of peoples this
                type of anime is spirit type anime 
 </Typography>
    </Grid>
    <Grid item md="12" xs="12" >
  
  </Grid>
    </Container>
    )}
export default shonen