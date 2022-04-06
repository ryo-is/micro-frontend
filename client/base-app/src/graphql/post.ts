import { gql, useQuery } from '@apollo/client';
import { Query } from '@graphql/generated/graphql';

export const usePostQuery = ({ userId }: { userId: string }) => {
  const query = gql`
    query GetPost($userId: ID!) {
      post(id: $userId) {
        id
        title
      }
    }
  `;

  return useQuery<Query>(query, {
    variables: {
      userId,
    },
  });
};
