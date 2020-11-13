import React from "react"
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core/styles"
import Romentic from "../../Component/catagories/Romantic"
import BackgroundImage from "../../demo/romantic.png"
const useStyles = makeStyles({

   Image:{
      backgroundImage:`url(${BackgroundImage})`,  
backgroundSize:"cover",
  padding:"10%",
  fontWeight:"bold",
  borderLeft:"0px",
  borderRight:"0px"
}})



const romantic =()=>{
   const classes = useStyles()
    return (
         <Container maxWidth="xl" className={classes.Image}>
          <Romentic />
           </Container>
    )
}
export default romantic

