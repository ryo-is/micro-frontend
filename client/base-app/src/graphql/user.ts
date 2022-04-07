import { gql, useQuery } from '@apollo/client';
import {
  getQueryUser,
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

  const { loading, error, data } = useQuery<
    getQueryUser,
    getQueryUserVariables
  >(query, {
    variables: {
      userId,
    },
  });

  return { userQueryLoading: loading, userQueryError: error, user: data?.user };
};
