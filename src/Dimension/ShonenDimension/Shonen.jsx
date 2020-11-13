import React from "react";
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core/styles"
import ShonenContent from "../DimensionContent/ShonenDimension"
import Music from "./shonenmusic"
const useStyles = makeStyles({
 })

const Shonen=()=>{
    const classes = useStyles()
    
    return(
       <div>       
       <ShonenContent/>
       <Music/>
       </div>
    )
}
export default Shonen