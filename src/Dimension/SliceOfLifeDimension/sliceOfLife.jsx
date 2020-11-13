import React from "react";
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core/styles"
import BackgroundImage from "../../demo/slice.png"
import SliceOfLifeContent from "../DimensionContent/sliceOfLifeDimension"
import Music from "./sliceOfLifeMusic"
const useStyles = makeStyles({
})

const sliceOfLife=()=>{
    const classes = useStyles()
    
    return(
       <div>
<SliceOfLifeContent/>
<Music/>
       </div>
    )
}
export default sliceOfLife