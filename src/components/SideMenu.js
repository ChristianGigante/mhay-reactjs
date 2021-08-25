import React from "react";
import { makeStyles, withStyles } from "@material-ui/core";

/**makeStyle Example */

// const useStyles = makeStyles({
//   sideMenu: {
//     display: "flex",
//     flexDirection: "column",
//     position: "absolute",
//     left: "0px",
//     width: "20vw",
//     height: "100%",
//     backgroundColor: "#253053",
//   },
// });

// const SideMenu = () => {
//   const classes = useStyles();
//   console.log(classes);
//   return <div className={classes.sideMenu}></div>;
// };

// export default SideMenu;

/**withStyle Example */
const styles = {
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    // width: "20vw",
    height: "100%",
    backgroundColor: "#253053",
  },
};

const SideMenu = (props) => {
  const { classes } = props;
  return <div className={classes.sideMenu}></div>;
};

export default withStyles(styles)(SideMenu);
