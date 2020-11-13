import React from "react"
import {makeStyles} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button" 
import {NavLink} from "react-router-dom"
const useStyles = makeStyles({    
    Button:{
    backgroundImage:`url(${"https://media4.giphy.com/media/WUrkQCxASoE4oIIXG8/giphy.webp?cid=ecf05e4754bfac92d1aaf953d320813bb17d0aba4fce2368&rid=giphy.webp"})`,
    backgroundSize:"cover",
    marginTop:"2%",
padding:"1%",
paddingLeft:"5%",
paddingRight:"5%",
borderRadius:"14px",
fontWeight:"Bold",
fontFamily:['Luckiest Guy', "cursive"]

},
})

const button = (props)=>{
    const classes = useStyles()
    return(
        <Button variant="contained"  className={classes.Button}>Enter The Dimension</Button>

    )
}
export default button