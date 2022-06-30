import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { Avatar } from "@material-ui/core";

import MenuItem from "./MenuItem";
import { NavLink } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer({
  open,
  handleDrawerOpen,
  handleDrawerClose,
}) {
  const classes = useStyles();
  const theme = useTheme();
  const [showDialog, setShowDialog] = React.useState(false);

  // const handleClickOpen = () => {
  //   setShowDialog(true);
  // };

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      {showDialog && <showdialog2 onClose={handleClose}></showdialog2>}
      <div className={classes.root}>
        {/* <CssBaseline /> */}
        <AppBar
          color="secondary"
          style={{ color: "white" }}
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              style={{ color: "white" }}
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap style={{ flexGrow: "1" }}>
              <p style={{ margin: "0" }}>MiniMart</p>
            </Typography>
            <div style={{ display: "flex", marginRight: "20px" }}>
              <Typography>Tâm Hữu</Typography>
            </div>
            <Avatar
              alt="Tâm Hữu"
              src="https://kenh14cdn.com/thumb_w/660/203336854389633024/2022/4/1/photo-1-164880954522951499369.png"
            />
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            {["Danh Mục", "Sản Phẩm"].map((text, index) => (
              <NavLink
                to={`${index % 2 === 0 ? "category" : "product"}`}
                style={{
                  textDecoration: "none",
                  color: "#000",
                }}
              >
                <MenuItem text={text} index={index} />
              </NavLink>
            ))}
          </List>
          <Divider />
        </Drawer>
        {/* <main className={classes.content}>
          <div className={classes.toolbar} />

          <Products clickHandler={handleClickOpen}></Products>
        </main> */}
      </div>
    </>
  );
}
