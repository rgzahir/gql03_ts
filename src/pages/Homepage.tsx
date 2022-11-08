import React from "react";
import { Text, View } from "react-native";

import Spacex from "../cards/Spacex";

export const Homepage = () => {
  return (
    <View>
      <Text style={{ marginLeft: 40, marginTop: 30 }}>Homepage</Text>
      <View style={{ marginBottom: 24 }} />
      {/* <Weather /> */}
      <Spacex />
    </View>
  );
};
