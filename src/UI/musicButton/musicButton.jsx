import React,{useState} from 'react';
import Switch from '@material-ui/core/Switch';
import {Howl , Howler} from "howler"
import song from "./song/hanabi.mp3";


const musicButton =()=>{
   
  var sound =new Howl({
    src:[song],
  
  })
  

  const[toggle, setToggle]=useState(false,"")
  const toggleHandler =()=>{
  toggle ? setToggle(true):setToggle(false)
  }
  
  const soundHandler =()=>{
    return (
  toggleHandler ? sound.play():null
    )}


  Howler.volume(1.0)
  return(
       <Switch  
     color="primary"
     onClick={soundHandler} />
      
     
  )
}
export default musicButton