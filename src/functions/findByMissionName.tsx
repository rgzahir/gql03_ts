import React from "react";
import { Text, View } from "react-native";

export const FindByMissionName = (
  data: any | undefined,
  finder: string
): JSX.Element | undefined => {
  if (data) {
    const { launchesPast } = data;

    //find method
    const found = launchesPast.find((element: any): any =>
      element.mission_name.includes(finder)
    );

    // run console log
    // console.log(
    //   `VALUE: -------- ${found.mission_name}  /  ${found.launch_site.site_name_long} /  ${found.launch_date_local}`
    // );
    // console.log(`typeof found:  ${typeof found}`);
    // console.log(`typeof launchesPast:  ${typeof launchesPast}`);

    if (found) {
      return (
        <View
          style={{
            padding: 16,
            backgroundColor: "lightblue",
            marginBottom: 24,
          }}
        >
          <Text>name:xs {found?.mission_name}</Text>
          <Text>date: {found?.launch_date_local}</Text>
          {/* <Text>site name: {found?.launch_site?.site_name_long}</Text> */}
        </View>
      );
    } else {
      return (
        <View>
          <Text>No result</Text>
        </View>
      );
    }
  }
};

export default FindByMissionName;
