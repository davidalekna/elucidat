import gql from 'graphql-tag';

export const GET_SEATS = gql`
  query getSeats {
    allSeats: getSeats {
      seatNumber
      price
      available
      disabilityAccessible
    }
  }
`;
