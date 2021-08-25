import React from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  InputBase,
  IconButton,
  Badge,
  makeStyles,
} from "@material-ui/core";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlineRoundedIcon from "@material-ui/icons/ChatBubbleOutlineRounded";
import PowerSettingsNewRoundedIcon from "@material-ui/icons/PowerSettingsNewRounded";
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  // Component Customization with className attribute
  root: {
    backgroundColor: "#fff",
    // transform: "translateZ(0)",
  },
  searchInput: {
    opacity: "0.6",
    // padding: "0px 8px",
    padding: `0 ${theme.spacing(1)}px`,
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon-root": {
      //   marginRight: "8px",
      marginRight: theme.spacing(1),
    },
  },

  //   Component Customization with classes Attribute
  btnRoot: {
    backgroundColor: "green",
  },
  btnLabel: {
    backgroundColor: "red",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item>
            <InputBase
              placeholder="Search Topcs.., "
              className={classes.searchInput}
              startAdornment={<SearchIcon fontSize="small" />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            {/* <IconButton className={classes.btn}> */}
            <IconButton
              classes={{ root: classes.btnRoot, label: classes.btnLabel }}
            >
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color="primary">
                <ChatBubbleOutlineRoundedIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewRoundedIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
