import { gql } from 'apollo-server-express';

export default gql`
  type Seat {
    id: ID
    title: String
    release_date: String
    count_stars: Int
    director_id: ID
  }

  type Query {
    getSeats: [Seat]
    availableSeats: [Seat]
    cheapestSeat: [Seat]
  }

  type Mutation {
    bookSeat: Seat
  }
`;
