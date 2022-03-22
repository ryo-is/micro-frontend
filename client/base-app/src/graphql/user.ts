import { gql, useQuery } from '@apollo/client';
import { Query } from '@graphql/generated/graphql';

export const useUserQuery = ({ userId }: { userId: number }) => {
  const query = gql`
    query Get($userId: Int!) {
      user(id: $userId) {
        id
        name
      }
    }
  `;

  return useQuery<Query>(query, {
    variables: {
      userId,
    },
  });
};
