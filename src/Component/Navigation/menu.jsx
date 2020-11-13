
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import {NavLink} from "react-router-dom"
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ClassNames from "classnames"
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DropDown from "../Navigation/dropDown"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import ReceiptIcon from '@material-ui/icons/Receipt';
import Button from "@material-ui/core/Button"
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  
  toolbar:{
    backgroundColor:"transparent",
  },
    root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      backgroundColor:"transparent",
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor:"transparent",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    
},
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:"white"
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',

    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  
},
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
          
    }),
    marginLeft: 0,
  },

  listItem:{
      fontfamily: 
      ['Syne Tactile', "cursive"],
      fontWeight:"bold",
  },



}));

const menu =()=>{
    
        const classes = useStyles();
        const theme = useTheme();
        const [open, setOpen] = React.useState(false);
      
        const handleDrawerOpen = () => {
          setOpen(true);
        };
      
        const handleDrawerClose = () => {
          setOpen(false);
        };
      
        return (
            

          <div className={classes.root} >
            <CssBaseline />
            <AppBar 
              position="fixed"
              className={ClassNames(classes.appBar,classes.toolbar, {
                
                [classes.appBarShift]: open,
                
              })}
            >
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  className={ClassNames(classes.menuButton, open && classes.hide)}
                >
                  <MenuIcon  />
                </IconButton>
                <Typography variant="h6" noWrap  className={classes.listItem}>
                 Anime Blog 
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              </div>
              <Divider />
              <List  className={classes.listItem}>
            <ListItem >
            <ListItemIcon>
                <HomeIcon/>
            </ListItemIcon>
                Home 
            </ListItem>
            
            <ListItem>
            <ListItemIcon>
                <ReceiptIcon/>
            </ListItemIcon>
                Anime Posted 
            </ListItem>
            <ListItem>
            <ListItemIcon>
                <StorageOutlinedIcon/>
            </ListItemIcon>
             <DropDown/>
                
            </ListItem>
            <ListItem>
            <ListItemIcon>
                <AccountCircleIcon/>
            </ListItemIcon>
            <NavLink to="signup"> Signup </NavLink> 
            </ListItem>

              </List>
     </Drawer>
  </div>  
    )

}
export default menu