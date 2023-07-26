import { fetchAvailableTickets } from "../utils/api/ticketsApi";

export const resolvers = {
  Query: {
    getAvailableTickets: async (_: any, { id }: { id: string }) => {
      return fetchAvailableTickets(id);
    },
  },
};
