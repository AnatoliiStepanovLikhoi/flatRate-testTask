import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type AvailableSeat {
    SectionId: String
    SeatRow: String
    SeatNumber: String
    Price: Int
  }

  type Query {
    getAvailableTickets(id: String): [AvailableSeat]
  }
`;
