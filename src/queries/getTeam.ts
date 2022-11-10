import gql from "graphql-tag";

export const GET_TEAM = gql`
  query teamMatches(
    $participantId: ID!
    $fromDate: LocalDate!
    $toDate: LocalDate!
  ) {
    eventsByParticipantAndDateRange(
      participantId: $participantId
      fromDate: $fromDate
      toDate: $toDate
    ) {
      startDate
      tournamentStage {
        name
      }
      participants {
        results {
          resultType
          value
        }
        participant {
          name
        }
      }
    }
  }
`;
