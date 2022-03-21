import { gql, useQuery } from '@apollo/client';
import { Query } from '@graphql/generated/graphql';

export const GraphQL = () => {
  const query = gql`
    query Get($userId: Int!) {
      user(id: $userId) {
        id
        name
      }
    }
  `;
  const { loading, error, data } = useQuery<Query>(query, {
    variables: {
      userId: 100,
    },
  });

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.user?.id} / {data?.user?.name}
        </div>
      )}
    </>
  );
};
