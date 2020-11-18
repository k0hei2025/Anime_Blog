import React from "react"
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core/styles"
import Comedy from "../../Component/catagories/Comedy"
const useStyles = makeStyles({

   Image:{
      backgroundImage:`url(${"https://i1.wp.com/www.s1e1.com/wp-content/uploads/2018/07/01-19.jpg?ssl=1"})`,  
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
          <Comedy />
           </Container>
    )
}
export default romantic

