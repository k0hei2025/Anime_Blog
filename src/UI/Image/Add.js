import React from "react"
import Add from "../../icons/button.svg"
import {makeStyles} from "@material-ui/core/styles"


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
}))

const addIcon =()=>{
const classes = useStyles()
    return(
    <img src={Add} className={classes.small} alt="add_Icon" />
    )
}
export default addIcon;