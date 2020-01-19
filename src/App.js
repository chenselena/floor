import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';

import Profile from "./pages/Profile";

Amplify.configure(awsconfig);

function App() {
  require("typeface-raleway");
  return (
    <div className="App">
      <Profile />
    </div>
  );
}

export default withAuthenticator(App, true);
