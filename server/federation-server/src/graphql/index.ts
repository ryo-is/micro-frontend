import { Express } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloGateway } from '@apollo/gateway';

// Apollo
export const startApolloServer = async (app: Express) => {
  const gateway = new ApolloGateway({
    serviceList: [{ name: 'users', url: 'http://localhost:3001/graphql' }],
  });
  const gqlSrever = new ApolloServer({ gateway });
  await gqlSrever.start();
  gqlSrever.applyMiddleware({ app });
};
