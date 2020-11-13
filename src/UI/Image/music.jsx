import React from "react"
import musicImg from "../../icons/music-notes.svg"
import {makeStyles} from "@material-ui/core/styles"
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    small: {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
}))


const music =()=>{
    const classes = useStyles();
    return(
        <img src={musicImg} className={classes.small}/>
    )
}
export default music;