import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Container from '@material-ui/core/Container';
import {Grid} from "@material-ui/core"
import AttentionImg  from "../../UI/Image/ImageCompartment"
import ClassNames from "classnames"

const useStyles= makeStyles((theme)=>({
 margin:{
     marginTop:"10px",
     width:"200px",
     
 },

 align:{
     textAlign:"center",
     fontFamily:[
        'Luckiest Guy', "cursive"
           ],

     borderRadius:"400px"
   
    },
 grid:{
    
    width:"100%",
    marginTop:"4px",
    padding:theme.spacing(6),
 

},
}))

const attention =(props)=>{
   
    const classes = useStyles();

    return (
            
         <Grid container spacing={2} className={classes.grid}>
         <Grid item md={9} xs={7} >
           </Grid>

         <Grid item md={2 } xs={12}  className={classes.align}> 
             <Grid  >  
           <Grid>
             <AttentionImg />
             </Grid>
             This site is only for Suggestions of people and postting your favoriote Anime       
             </Grid>
         </Grid>
      
    </Grid>


    )
}
export default attention