import React from "react";
import "./App.css";
import SideMenu from "../components/SideMenu";
import Header from "../components/Header";
// import PageHeader from "../components/PageHeader";
// import PeopleOutlineTwoToneIcon from "@material-ui/icons/PeopleOutlineTwoTone";

import Employees from "../pages/Employees/Employees";

import {
  CssBaseline,
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core";
// import { createTheme } from '@material-ui/core/styles'
const theme = createTheme({
  palette: {
    primary: {
      main: "#333996",
      light: "#3c44b126",
    },
    secondary: {
      main: "#f83245",
      light: "#f8324526",
    },
    background: {
      default: "#fff",
    },
  },
  shape: {
    borderRadius: "12px",
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: "translateZ(0)",
      },
    },
  },
  props: {
    MuiIconButton: {
      disableRipple: true,
    },
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "320px",
    width: "100%",
  },
});
function App() {
  const classes = useStyles();
  return (
    // <React.Fragment>
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        {/* <PageHeader
          title="Page Header"
          subTitle="Page Description"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        /> */}

        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
    // </React.Fragment>
  );
}

export default App;
