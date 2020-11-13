import React from "react";
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core/styles"
import ComedyContent from "../DimensionContent/ComedyDimension"
import Music from "./ComedyMusic"
const useStyles = makeStyles({
 })

const Shonen=()=>{
    const classes = useStyles()
    
    return(
       <div>       
       <ComedyContent/>
       <Music/>
       </div>
    )
}
export default Shonen