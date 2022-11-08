/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";

import { Homepage } from "./src/pages/Homepage";

const App = () => {
  // const clientWeather = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   uri: "https://graphql-weather-api.herokuapp.com/",
  // });
  const clientSpacex = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api.spacex.land/graphql/",
  });

  return (
    <ApolloProvider client={clientSpacex}>
      <Homepage />
    </ApolloProvider>
  );
};

export default App;
