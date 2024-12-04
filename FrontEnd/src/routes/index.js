import React from "react";
import StackRouter from "./stack.routes";
import { NavigationContainer } from "@react-navigation/native";

export default props => (
  <NavigationContainer> 
      <StackRouter/>
  </NavigationContainer>
)