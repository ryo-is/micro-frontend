import { useConfirmDialog } from '@hooks/useConfirmDialog';

export const Dialog = () => {
  const { isOpen, message, handleClickOK, handleClickCancel } =
    useConfirmDialog();

  return (
    <>
      {isOpen && (
        <div className="w-full h-screen absolute top-0 left-0 flex items-center justify-center">
          <div
            className="w-full h-screen bg-black opacity-70"
            onClick={handleClickCancel}
          />
          <dialog open={isOpen} className="w-2/12">
            <div className="py-2">{message}</div>
            <div className="text-right">
              <button
                className="bg-gray-600 hover:bg-gray-700 text-gray-200 py-2 px-4 rounded mt-2 mr-2"
                onClick={handleClickCancel}
              >
                キャンセル
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-gray-200 py-2 px-4 rounded mt-2"
                onClick={handleClickOK}
              >
                OK
              </button>
            </div>
          </dialog>
        </div>
      )}
    </>
  );
};
