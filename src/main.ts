import { typeDefs } from "./schemas/schema";
import { ApolloServer } from "apollo-server-express";
import { resolvers } from "./resolvers/resolvers";

import express from "express";
import http from "http";
import cors from "cors";
import bodyParser from "body-parser";

const port = 4000;
const eventId = process.argv[2];

async function startServer() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { eventId },
  });

  await server.start();

  app.use("/", cors(), bodyParser.json());

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen(port, () => resolve())
  );
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
}

startServer().catch((err) => console.error(err));
