import React from "react"
import {Grid , Paper} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import ClassNames from "classnames"
import AnimeImg from "../../UI/Image/animeLove"
import Button from "@material-ui/core/Button"
import AddIcon from "../../UI/Image/Add"
import "../../Container/PostAnime.css"
import MusicAnime from "../../UI/Image/music"
import MusicButton from "../../UI/musicButton/RmenticButton"

const useStyles = makeStyles((theme)=>({
  
    buttonGrid:{
        marginTop:"12px"
    },
 
    grid:{
    
    width:"100%",
    marginTop:"4px",
},
paper:{
    padding:theme.spacing(6),
    color:theme.palette.text.secondary,
    background:theme.palette,
    textAlign:"right",
    

},
img:{
   textAlign:"left",
},

 button:{
     borderRadius:"20px",
      fontFamily:[
     'Luckiest Guy', "cursive"
        ],
        fontWeight:"bold"   
 },


}))

const postAnime =()=>{
    const classes = useStyles()
    return(
     
        <Grid container spacing={2} className={classes.grid} >
        
        <Grid item>
       </Grid>
        <Grid item className={classes.buttonGrid} >
         </Grid>
        <Grid item xs={4} md={10} className={classes.paper } >                
                <MusicAnime/>
                <MusicButton/>
        </Grid>
         </Grid>
    )
}
export default postAnime