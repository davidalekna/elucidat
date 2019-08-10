import gql from 'graphql-tag';

export const GET_THEATER_DATA = gql`
  query getTheaterData {
    cheapestSeat: getCheapestSeat
    disabledSeats: getAvailableSeats(input: { disabled: true })
    otherSeats: getAvailableSeats(input: { disabled: false })
    allSeats: getSeats {
      seatNumber
      price
      available
      disabilityAccessible
    }
  }
`;
