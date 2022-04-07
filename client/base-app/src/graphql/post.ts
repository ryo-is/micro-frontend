import { gql, useQuery } from '@apollo/client';
import {
  getQueryPost_post,
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

  return useQuery<getQueryPost_post, getQueryPostVariables>(query, {
    variables: {
      userId,
    },
  });
};
