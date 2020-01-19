import React from "react";
import MiniDrawer from "../components/MiniDrawer";
import LetterAvatar from "../components/LetterAvatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  profileIntro: {
    marginTop: "100px",
    marginLeft: "400px"
  },
  textProfileIntro: {
    marginTop: "30px",
    color: "##3C3B5B"
  }
});

export default function Profile() {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={1}>
      <MiniDrawer />
      <Grid item xs={6}>
        <Grid container justify="flex-end" spacing={spacing}>
          <Typography component="div" variant="h5">
            About
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid
          className={classes.profileIntro}
          container
          justify="flex-start"
          spacing={spacing}
        >
          <Grid key={0} item>
            <LetterAvatar />
          </Grid>
          <Grid key={1} item className={classes.textProfileIntro}>
            <Typography component="div" variant="h4">
              Sara Al Humidi
            </Typography>
            <Typography variant="subtitle1">4A Civil Engineering </Typography>
          </Grid>
        </Grid>
        <Grid
          className={classes.profileIntro}
          container
          justify="flex-start"
          spacing={spacing}
        >
          <Grid key={0} item>
            <Typography component="div" variant="h6">
              Floor Feed
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
