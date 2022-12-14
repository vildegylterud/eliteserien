import { gql } from "@apollo/client";

export const GET_TABLE = gql`
  query table($tournamentStageId: ID!) {
    tournamentStage(id: $tournamentStageId) {
      name
      standings(type: LEAGUE_TABLE) {
        participants {
          participant {
            id
            name
            images {
              url
            }
          }
          rank
          data {
            code
            value
          }
        }
      }
    }
  }
`;
