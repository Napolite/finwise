// prettier-ignore
import { Redirect } from "expo-router";
import React from "react";
import "../global.css";

const Index = () => {
  return <Redirect href={"/(tabs)/home"} />;
};

export default Index;
