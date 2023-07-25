import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from "graphql";

// Оголошення типу для місця доступного квитка
const AvailableSeatType = new GraphQLObjectType({
  name: "availableSeat",
  fields: {
    Section: { type: GraphQLString },
    Row: { type: GraphQLString },
    SeatNumber: { type: GraphQLString },
    Price: { type: GraphQLInt },
  },
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    getAvailableTickets: {
      type: GraphQLString,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (source, args) => {
        return `Available tickets for event with ID ${args.id}`;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQueryType,
});

export default schema;
