import React from "react"
import {Grid} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import {NavLink }from "react-router-dom"
import Button from "@material-ui/core/Button"
import DimensionButton from "../../UI/Button"
import ClassNames from "classnames"
const useStyles = makeStyles({
    contentContainer:{
        borderWidth:"2px",
     fontFamily: ['Syne Tactile', 'cursive'],
     paddingTop:"12%"

     
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
    color:"white"
    
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
       Comedy
    </Typography>
    </Grid>
    <Grid item md="12" xs="12" className={ classes.contentContainer}>
 <Typography  variant="h5" className={ClassNames(classes.Typography , classes.writing) }>  comedy type anime makes you feel very confident and easy type life you are full relaxed feel
                      when you watch comedy anim
 </Typography>
    </Grid>
    <Grid item md="12" xs="12" >
  
    <Button variant="contained" className={classes.Button} ><NavLink className={classes.Navlink} to="comedyDimension"> Enter The Dimension</NavLink></Button>
  </Grid>
    </Grid>
    )}
export default shonen