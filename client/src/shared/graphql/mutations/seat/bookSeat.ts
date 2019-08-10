import gql from 'graphql-tag';

export const BOOK_SEAT = gql`
  mutation bookSeat($input: SeatInput) {
    bookSeat(input: $input) {
      seatNumber
      price
      available
      disabilityAccessible
    }
  }
`;
