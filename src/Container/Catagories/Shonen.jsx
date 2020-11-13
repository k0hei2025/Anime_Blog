import React from "react";
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core/styles"
import BackgroundImage from "../../demo/fdf.jpg"
import ShonenContent from "../../Component/catagories/Shonen"
const useStyles = makeStyles({
    Image:{
         backgroundImage:`url(${BackgroundImage})`,  
  backgroundSize:"cover",
     padding:"10%",
     fontWeight:"bold",
     fontfamily:[
         
   ],
}})

const Shonen=()=>{
    const classes = useStyles()
    
    return(
       <Container  maxWidth="xl" className={classes.Image}>
<ShonenContent/>
       </Container>
    )
}
export default Shonen