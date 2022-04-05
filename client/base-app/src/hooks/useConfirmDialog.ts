import { useContext } from 'react';
import {
  ConfirmDialogContext,
  ConfirmDialogState,
  defaultState,
} from '@contexts/confirmDialogContext';

export const useConfirmDialog = ():
  | ConfirmDialogState & {
      isConfirmed: (message: string) => Promise<boolean>;
    } => {
  const c = useContext(ConfirmDialogContext);
  const [confirm, setConfirm] = [
    ...(c || [
      { ...defaultState },
      (): void => {
        return;
      },
    ]),
  ];

  const isConfirmed = (message: string): Promise<boolean> => {
    console.log('isConfirmed');
    const promise = new Promise((resolve, reject) => {
      setConfirm({
        isOpen: true,
        message,
        handleClickOK: resolve,
        handleClickCancel: reject,
      });
    });
    return promise.then(
      () => {
        setConfirm({ ...confirm, isOpen: false });
        return true;
      },
      () => {
        setConfirm({ ...confirm, isOpen: false });
        return false;
      }
    );
  };

  return {
    ...confirm,
    isConfirmed,
  };
};
