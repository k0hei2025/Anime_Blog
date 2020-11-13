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
        backgroundImage:`url(${"https://66.media.tumblr.com/e7ac38ba7adeee80fa968e0f82902d5d/tumblr_pk58nt4huK1teewzgo2_500.gif"})`,  
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
        Romentic
    </Typography>
    </Grid>
    <Grid item md="12" xs="12" className={ classes.contentContainer}>
 <Typography  variant="h5" className={ClassNames(classes.Typography , classes.writing) }>   romantic type anime is to those who wants to feel how 2d girlfriend will enjoythe
                life of there life with there boyfriend in this type of anime you see they have too good life they both
                spend together like going to fireworks beach and many other place they enjoy together but in the end of
                the story they have too sad positon but in end they spend a good life some anime of romantic is too
                emotional you cant traight your eyes
 </Typography>
    </Grid>
    <Grid item md="12" xs="12" >
  
  </Grid>
    </Container>
    )}
export default shonen