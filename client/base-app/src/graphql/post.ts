import { gql, useQuery } from '@apollo/client';
import {
  getQueryPost,
  getQueryPostVariables,
} from './__generated__/getQueryPost';

export const usePostQuery = ({ userId }: { userId: string }) => {
  const query = gql`
    query getQueryPost($userId: ID!) {
      post(id: $userId) {
        id
        title
      }
    }
  `;

  const { loading, error, data } = useQuery<
    getQueryPost,
    getQueryPostVariables
  >(query, {
    variables: {
      userId,
    },
  });

  return { postQueryLoading: loading, postQueryError: error, post: data?.post };
};
