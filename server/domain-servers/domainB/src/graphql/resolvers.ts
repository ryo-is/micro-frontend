import { Resolvers } from 'src/graphql/generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    post: async (_, { id }) => {
      return {
        id,
        title: 'post title',
      };
    },
  },
  Post: {
    __resolveReference(post) {
      return {
        id: post.id,
        title: 'post title',
      };
    },
  },
};
