import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

import FilterAllMatching from "../functions/filterAllMatching";
import FindByMissionName from "../functions/findByMissionName";
import { GET_SPACEX_QUERY } from "../graphql/Queries_Spacex";

export const Spacex = () => {
  // const [limit, setLimit] = useState("10");
  const [modalToggler, setModalToggler] = useState(false);
  const [finder, setFinder] = useState("");
  const [getSpaceX, { data, error }] = useLazyQuery(GET_SPACEX_QUERY);

  if (error) {
    console.log(">>> Data Error");
  }

  if (data) {
    // console.log(data.launchesPast[2].ships.name);
    //   console.log(data);
  }

  // const { launchesPast } = data;
  const filteredData = FilterAllMatching(data, finder);

  // PLAN: to get data onloading screen and access specific data from the result
  //   useEffect(() => {
  //     const unSubscribe = () => {
  //       getSpaceX();
  //     };

  //     unSubscribe();
  //   });

  return (
    <ScrollView style={{ paddingBottom: 100, marginBottom: 100 }}>
      <TextInput
        placeholder="finder"
        value={finder}
        onChangeText={setFinder}
        style={{ padding: 16, borderWidth: 1 }}
      />
      <Button title="get spacex" onPress={() => getSpaceX()} />

      {data ? FindByMissionName(data, finder) : null}

      {filteredData && finder !== "" ? (
        filteredData.map((item, key) => {
          return (
            <TouchableOpacity key={key} style={{ paddingLeft: 16 }}>
              <Text>{item.mission_name}</Text>
            </TouchableOpacity>
          );
        })
      ) : (
        <View />
      )}

      {/* {data ? FilterAllMatching(data, finder) : null} */}
      {/* {console.log(
        `res console: >> ${"\n"} ${FilterAllMatching(data, finder)}`
      )}

      {console.log(
        `typeof res in Spacex:  ${typeof FilterAllMatching(data, finder)}`
      )} */}
    </ScrollView>
  );
};

export default Spacex;
