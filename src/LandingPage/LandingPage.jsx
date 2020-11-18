import React from "react"
import Header from "../Container/Header";
import PostAnime from "../Container/PostAnime";
import Shonen from "../Container/Catagories/Shonen"
import SliceOfLife from "../Container/Catagories/SliceOfLife"
import Romantic from "../Container/Catagories/Romentic"
import Comedy from "../Container/Catagories/Comedy"
import {Grid} from "@material-ui/core"

const landingPage =()=>{
    
    return (
        <Grid item md="12" xs="12" className="font">
       <Header />
        
         <PostAnime />
       <Shonen/>
       <SliceOfLife/>
       <Romantic/>
       <Comedy/>
       
        </Grid>
    
    
    )
}
export default landingPage