import gql from 'graphql-tag';

export const GET_SEATS = gql`
  query getSeats {
    getSeats {
      seatNumber
      price
      available
      disabilityAccessible
    }
  }
`;
