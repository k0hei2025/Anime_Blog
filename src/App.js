import React, { Component } from 'react';
import {BrowserRouter , Switch , NavLink , Route} from "react-router-dom"
import LandingPage from "../src/LandingPage/LandingPage"
import './App.css';
import OtakuDimension from "./Dimension/ShonenDimension/Shonen"
import SliceOfLife from "./Container/Catagories/SliceOfLife"
import Romantic from "./Container/Catagories/Romentic"
import Comedy from "./Container/Catagories/Comedy"
import Shonen from "./Container/Catagories/Shonen"
import SliceOfLifeDimension from './Dimension/SliceOfLifeDimension/sliceOfLife'
import RomenticContent from "./Dimension/RomenticDimension/Romentic"
import ComedyContent from "./Dimension/ComedyDimension/Comedy"
import Signup from "./Authentication/Signup"
import AddAnime from "./Component/postAnime/AddAnime"
class App extends Component {
  render() {
    return (   
      <BrowserRouter>
    <div className="App">
    <Switch>
            <Route path="/" exact component={LandingPage}/> 
            <Route path="/shonenDimension" exact component={OtakuDimension}   />
            <Route path="/sliceOfLife" exact component={SliceOfLife}   />
            <Route path="/romantic" exact component={Romantic}   />
            <Route path="/comedy" exact component={Comedy}   />
            <Route path="/shonen"  component={Shonen} />  
            <Route path="/sliceOfLifeDimension" component={SliceOfLifeDimension} />
            <Route path="/romenticDimension" component={RomenticContent} />
            <Route path="/ComedyDimension" component={ComedyContent} />
            <Route path="/signup" component={Signup}/> 
            <Route path="/addAnime" component={AddAnime}/> 
           
    </Switch>      
     
    </div>   

</BrowserRouter> 
    )  
  }
}

export default App;
