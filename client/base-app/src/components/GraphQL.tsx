import { useState } from 'react';
import { useUserQuery } from '@graphql/user';
import { Dialog } from './Dialog';
import { useConfirmDialog } from '@hooks/useConfirmDialog';

export const GraphQL = () => {
  const { loading, error, data } = useUserQuery({ userId: 100 });
  const { isConfirmed } = useConfirmDialog();

  const [isShowData, setIsShowData] = useState(false);

  const handleShowData = async () => {
    const res = await isConfirmed('データを表示しますか？');
    if (res) setIsShowData(true);
  };

  const handleHideData = async () => {
    const res = await isConfirmed('データを非表示にしますか？');
    if (res) setIsShowData(false);
  };

  if (error) {
    return <div className="text-red-500">Error!!!</div>;
  }

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="p-4">
          <div>UserID: {isShowData ? data?.user?.id : '---'}</div>
          <div>Name: {isShowData ? data?.user?.name : '---'}</div>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded mt-2 mr-2"
            onClick={handleShowData}
          >
            データを表示する
          </button>
          <button
            className="bg-red-600 hover:bg-red-700 text-gray-200 py-2 px-4 rounded mt-2"
            onClick={handleHideData}
          >
            データを非表示にする
          </button>
        </div>
      )}
      <Dialog />
    </>
  );
};
