import React from "react";
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core/styles"
import RomenticContent from "../DimensionContent/romenticContent"
import Music from "./RomenticMusic"
const useStyles = makeStyles({
 })

const Shonen=()=>{
    const classes = useStyles()
    
    return(
       <div>       
       <RomenticContent/>
       <Music/>
       </div>
    )
}
export default Shonen