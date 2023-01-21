import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

// function App({ signOut }) {
//   return (
//     <View className="App">
//       <Card>
//         <img src={logo} className="App-logo" alt="logo" />
//         <Heading>Book Log</Heading>
//       </Card>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
//   );
// }

function App() {
  return (
    <View className="App">
      <Card>
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>Book Log</Heading>
      </Card>
    </View>
  );
}


export default (App);
//export default withAuthenticator(App);
