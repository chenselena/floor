import React from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Box
        display="flex"
        flexDirection="column"
        p={1}
        bgcolor="background.paper"
      >
        <TextField
          required
          id="outlined-required"
          label="First Name"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Last Name"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Phone Number"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="School"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Program"
          variant="outlined"
          size="small"
        />
        <TextField
          required
          id="outlined-required"
          label="Graduating Year"
          variant="outlined"
          size="small"
        />
      </Box>
    </form>
  );
}
