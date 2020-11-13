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
        color:"white",
    padding:"1%",
    paddingLeft:"5%",
    paddingRight:"5%",
    borderRadius:"14px",
    fontWeight:"Bold",
    fontFamily:['Luckiest Guy', "cursive"]
    
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
        Slice Of Life
    </Typography>
    </Grid>
    <Grid item md="12" xs="12" className={ classes.contentContainer}>
 <Typography  variant="h5" className={ClassNames(classes.Typography , classes.writing) }>  slice of life anime is internal heart feeling anime this anime you cant tell to
                others how you feel and what you think but you can feel the emotions and complexity life of peoples  
 </Typography>



    </Grid>
    <Grid item md="12" xs="12" >
    <Button variant="contained" className={classes.Button} ><NavLink className={classes.Navlink} to="sliceOfLifeDimension"> Enter The Dimension</NavLink></Button>
  
  </Grid>
    </Grid>
    )}
export default shonen