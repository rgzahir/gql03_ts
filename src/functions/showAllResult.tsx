import React from "react";
import { Text, View } from "react-native";

export const ShowAllResult = (data: any): JSX.Element => {
  if (data) {
    data &&
      data.launchesPast.map(
        (
          item: {
            mission_name:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            launch_date_local:
              | string
              | number
              | boolean
              | React.ReactElement<
                  any,
                  string | React.JSXElementConstructor<any>
                >
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            launch_site: {
              site_name_long:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            };
            rocket: {
              rocket_name:
                | string
                | number
                | boolean
                | React.ReactElement<
                    any,
                    string | React.JSXElementConstructor<any>
                  >
                | React.ReactFragment
                | React.ReactPortal
                | null
                | undefined;
            };
          },
          key: React.Key | null | undefined
        ) => {
          return (
            <View key={key} style={{ paddingLeft: 16, marginBottom: 32 }}>
              <Text>name: {item.mission_name}</Text>
              <Text>date: {item.launch_date_local}</Text>
              <Text>site name: {item.launch_site.site_name_long}</Text>
              <Text>ship name: </Text>
              {/* <Text>ship name: </Text> */}
              <Text>rocket name: {item.rocket.rocket_name}</Text>
              {/* <Text>{item.ships.image}</Text> */}
            </View>
          );
        }
      );
  }

  return <View />;
};

export default ShowAllResult;
