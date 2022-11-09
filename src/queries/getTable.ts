import { gql, useQuery } from "@apollo/client";

const tournamentStageId = "4e50ba57-d5fe-4370-b2f8-e357ebeb4c83";

export const GET_TABLE = gql`
  query table($tournamentStageId: ID!) {
    tournamentStage(id: $tournamentStageId) {
      name
      startDate
      endDate
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

export const getTeamData = () => {
  const { error, data, loading } = useQuery(GET_TABLE, {
    variables: { tournamentStageId },
  });

  return {
    error,
    data,
    loading,
  };
};
