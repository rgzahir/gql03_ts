import { useLazyQuery } from "@apollo/client";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import { GET_WEATHER_QUERY } from "../graphql/Queries";

export const Weather = () => {
  const [citySearched, setCitySearched] = useState("Kuala Lumpur");
  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: citySearched },
  });

  if (error) return <Text>Error Found</Text>;

  if (data) {
    console.log(data);
  }

  return (
    <View>
      <TextInput
        placeholder="city name"
        value={citySearched}
        onChangeText={setCitySearched}
        style={{ padding: 16, borderWidth: 2 }}
      />
      <Button title="get weather" onPress={() => getWeather()} />
      {data && (
        <View style={{ paddingLeft: 16 }}>
          <Text>{data.getCityByName.name}</Text>
          <Text>
            Temperature: {data.getCityByName.weather.temperature.actual}
          </Text>
          <Text>
            Description: {data.getCityByName.weather.summary.description}
          </Text>
          <Text>Wind Speed: {data.getCityByName.weather.wind.speed}</Text>
        </View>
      )}
    </View>
  );
};

export default Weather;
