import React from "react"
import {Grid} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import ClassNames from "classnames"
import Button from "@material-ui/core/Button"
import {NavLink} from "react-router-dom"
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
    Button:{
        backgroundImage:`url(${"https://media4.giphy.com/media/WUrkQCxASoE4oIIXG8/giphy.webp?cid=ecf05e4754bfac92d1aaf953d320813bb17d0aba4fce2368&rid=giphy.webp"})`,
        backgroundSize:"cover",
        marginTop:"2%",
    padding:"1%",
    paddingLeft:"5%",
    paddingRight:"5%",
    borderRadius:"14px",
    fontWeight:"Bold",
    fontFamily:['Luckiest Guy', "cursive"],
   
    },
Navlink:{
    color:"white"
    
}

})


const shonen=()=>{
    const classes = useStyles()
    return (
   <Grid>
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
  
    <Button variant="contained" className={classes.Button} ><NavLink className={classes.Navlink} to="shonenDimension"> Enter The Dimension</NavLink></Button>
  </Grid>
    </Grid>
    )}
export default shonen