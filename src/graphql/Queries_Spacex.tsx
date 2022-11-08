import { gql } from "@apollo/client";

export const GET_SPACEX_QUERY = gql`
  query getDataByAmount {
    launchesPast(limit: 100) {
      mission_name
      launch_date_local
    }
  }
`;
