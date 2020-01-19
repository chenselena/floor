import React from "react";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#D9C1C3"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#BBB0C3"
      // dark: will be calculated from palette.secondary.main,
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  peach: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(8),
    height: theme.spacing(8)
  },
  purple: {
    color: theme.palette.getContrastText(theme.palette.secondary.main),
    backgroundColor: theme.palette.secondary.main,
    width: theme.spacing(8),
    height: theme.spacing(8)
  }
}));

export default function LetterAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.peach}>A</Avatar>
    </div>
  );
}
