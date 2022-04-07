import { gql, useQuery } from '@apollo/client';
import {
  getQueryUser_user,
  getQueryUserVariables,
} from './__generated__/getQueryUser';

export const useUserQuery = ({ userId }: { userId: number }) => {
  const query = gql`
    query getQueryUser($userId: Int!) {
      user(id: $userId) {
        id
        name
      }
    }
  `;

  return useQuery<getQueryUser_user, getQueryUserVariables>(query, {
    variables: {
      userId,
    },
  });
};
