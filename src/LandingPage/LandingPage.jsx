import React from "react"
import Header from "../Container/Header";
import PostAnime from "../Container/PostAnime";
import Navigation from "../Container/Navigation"
import Shonen from "../Container/Catagories/Shonen"
import SliceOfLife from "../Container/Catagories/SliceOfLife"
import Romantic from "../Container/Catagories/Romentic"
import Comedy from "../Container/Catagories/Comedy"
import {Grid} from "@material-ui/core"
import {BrowserRouter } from "react-router-dom"
import Css from "./LandingPage.css"

const landingPage =(props)=>{
    
    return (
        <Grid item md="12" xs="12" className="font">
       <Header />
         <Navigation />
         <PostAnime />
       <Shonen/>
       <SliceOfLife/>
       <Romantic/>
       <Comedy/>
       
        </Grid>
    
    
    )
}
export default landingPage