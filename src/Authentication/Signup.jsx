import React from "react"
import Container from "@material-ui/core/Container"
import {makeStyles} from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import { Grid} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Fukoimg from "../demo/signup.jpg"
const useStyles = makeStyles((theme)=>({
    background:{
        backgroundColor:"darkslateblue",
        fontFamily:[
            'Luckiest Guy', "cursive"
               ],
    
        paddingTop:"7%",
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '35ch',
    
        },
    
      textAlign:"right",
      marginLeft:"0px"
      },
          margin:{
              marginBottom:"30%",
              textAlign:"right"
          },
          imghandle:{
              width:"60%",
              height:"33  %",
             borderRadius:"12px",
              transform:"scaleX(-1)"
          }       ,
          marign:{
              marginBottom:"56px",
              fontFamily:[
                'Luckiest Guy', "cursive"
                   ],
        
            },
            button:{
              padding:"1%",
              fontFamily:[
                'Luckiest Guy', "cursive"
                   ],
        

            },
            
    }))

const signUp=()=>{
   const classes = useStyles()
    return(
        <Container maxWidth="xl" className={classes.background}>
      <Grid container > 
            <Grid item md="6" xs="6" className={classes.margin}>
                  
                  <Typography  variant="h3" className={classes.marign} >Signup Onee Chan</Typography>
                          <form className={classes.root}>  <br/>
                          <TextField  id="outlined-basic" label="Username" variant="outlined" /><br />
                          <TextField id="outlined-basic" label="Password" variant="outlined" type="password"/> <br />                          
                          <Button color="secondary" variant="contained" className={classes.button}>Signup</Button>
                          </form>            
                 
   
   
            </Grid>
            <Grid item md="6" xs="6">
            <img src={Fukoimg} alt="sign_up img" className={classes.imghandle}  />
            </Grid>
            </Grid>
            </Container>
    )
}
export default signUp