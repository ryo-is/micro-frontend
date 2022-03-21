import { Resolvers } from 'src/graphql/generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    user: async (_, { id }) => {
      return {
        id: id * 2,
        name: 'test',
      };
    },
  },
  User: {
    __resolveReference(user) {
      return {
        id: user.id,
        name: 'test',
      };
    },
  },
};
