import { useUserQuery } from '@graphql/user';

export const GraphQL = () => {
  const { loading, error, data } = useUserQuery({ userId: 100 });

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-4">
          <div>UserID: {data?.user?.id}</div>
          <div>Name: {data?.user?.name}</div>
        </div>
      )}
    </>
  );
};
