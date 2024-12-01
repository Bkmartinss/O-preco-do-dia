import React from "react";
import ShowRoutes from "./tab.routes";
// import StackRouter from "./stack.routes";
import { NavigationContainer } from "@react-navigation/native";

export default props => (
  <NavigationContainer> 
    <ShowRoutes/>
      {/* <StackRouter/> */}
  </NavigationContainer>
)