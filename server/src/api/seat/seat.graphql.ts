import { gql } from 'apollo-server-express';

export default gql`
  type Seat {
    seatNumber: String
    price: String
    available: Boolean
    disabilityAccessible: Boolean
  }

  type Query {
    getSeats: [Seat]
    getAvailableSeats(input: SeatInput): [String]
    getCheapestSeat: [String]
  }

  type Mutation {
    bookSeat(input: SeatInput): Seat
  }

  input SeatInput {
    seatNumber: String
    disabled: Boolean
  }
`;
