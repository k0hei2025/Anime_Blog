import React from "react"
import {Grid} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography" 
const useStyles = makeStyles({
   grid:{
       textAlign:"center",
       

       
   },
  typography:{
    fontFamily: ['Syne Tactile', "cursive"],
    fontWeight:"bold",
}

})

const content=()=>{
 const classes = useStyles()

    return (
     <Grid container spacing={2}>
     <Grid item md={12} xs={12} className={classes.grid} >
   <Typography variant="h4" className={classes.typography}>  Anime Blogs where ypu can see the peoples favoropte Animes and there 
     suggestions how they feel about those Anime
     </Typography>
     </Grid>
     </Grid>
    )
}
export default content