import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useRef, useState } from "react";
import { Button, ScrollView, TextInput } from "react-native";

import FindByMissionName from "../functions/findByMissionName";
import { GET_SPACEX_QUERY } from "../graphql/Queries_Spacex";

export const Spacex = () => {
  const [limit, setLimit] = useState("10");
  const [finder, setFinder] = useState("");
  const [getSpaceX, { data, error }] = useLazyQuery(GET_SPACEX_QUERY);

  if (error) {
    console.log(">>> Data Error");
  }

  if (data) {
    // console.log(data.launchesPast[2].ships.name);
    //   console.log(data);
  }

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
