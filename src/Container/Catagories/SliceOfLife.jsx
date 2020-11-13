import React from "react";
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core/styles"
import BackgroundImage from "../../demo/sliceOfLife.jpg"
import SliceOfLifeContent from "../../Component/catagories/SliceOfLife"
const useStyles = makeStyles({
    Image:{
         backgroundImage:`url(${BackgroundImage})`,  
  backgroundSize:"cover",
     padding:"10%",
     fontWeight:"bold",
     fontfamily:[
         
   ],
}})

const sliceOfLife=()=>{
    const classes = useStyles()
    
    return(
       <Container  maxWidth="xl" className={classes.Image}>
<SliceOfLifeContent/>
       </Container>
    )
}
export default sliceOfLife