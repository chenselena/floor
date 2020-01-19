import React from ‘react’;
import MiniDrawer from “../components/MiniDrawer”;
import Box from ‘@material-ui/core/Box’;
const classes = useStyles();
const useStyles = makeStyles({
    root: {
      flexGrow: 1
    },
    profileIntro: {
      marginTop: “100px”,
      marginLeft: “400px”
    },
    textProfileIntro: {
      marginTop: “30px”,
      color: “##3C3B5B”
    }
  });
export default class Services extends React.Component {
  render() {
    return (
      <div>
          <MiniDrawer/>
          <Box display=“flex” p={1} bgcolor=“background.paper”>
          <h1>My Don</h1>
        <h4>Arian Nedjabat</h4>
        <h4b>Contact Information</h4b>
      </Box>
        <h1>UW Campus Police</h1>
        <h4><b>Contact Information</b></h4>
        <h1>Health Services</h1>
        <h4><b>Contact Information</b></h4>
        <h1>Counselling</h1>
        <h4><b>Contact Information</b></h4>
        <h1>Accessibility Services</h1>
        <h4><b>Contact Information</b></h4>
      </div>
    );
  }
}
