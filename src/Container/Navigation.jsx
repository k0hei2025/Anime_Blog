import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import Menu from "../Component/Navigation/menu"
const useStyles = makeStyles((theme)=>({
 toolBar:{
     borderRadius:"50px",
     margin:"5px",
     marginLeft:"0px"
 }
}));


const catagories=()=>{
   const classes = useStyles()
    return(
        <Menu/>
    )
}
export default catagories