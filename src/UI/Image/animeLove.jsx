import React from "react"
import animeImg from "../../icons/anime.svg"
import {makeStyles} from "@material-ui/core/styles"
import Avatar from "@material-ui/core/Avatar"

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    small: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
}))


const animeSvg =()=>{
 const classes = useStyles();
    return(

        <Avatar src={animeImg} className={classes.small}  />
    )
}
export default animeSvg