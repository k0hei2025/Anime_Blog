import React from "react"
import {makeStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Content from "../Component/Header/content"
import BkgroundImage from "../demo/f1.jpg"

import Attention from "../Component/Header/Attention"
const useStyles = makeStyles({
    styleHeader:{
      backgroundImage:`url(${BkgroundImage})`,
      backgroundSize:"cover",
        padding:"16%",
        fontWeight:"bold",
        fontfamily:[
            'Ruge Boogie',
             "cursive"
      ],
        
    },

})

const header=()=>{
    const classes = useStyles();
    
    return(
    
    <Container maxWidth="xl" className={classes.styleHeader} >
         
           
           <Content/>
         

           <Attention/>  
       </Container>
     
    )
}
export default header;