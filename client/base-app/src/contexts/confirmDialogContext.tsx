import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  FC,
} from 'react';

export type ConfirmDialogState = {
  isOpen: boolean;
  message: string;
  handleClickOK: (value: unknown) => void;
  handleClickCancel: (value: unknown) => void;
};

export const defaultState: ConfirmDialogState = {
  isOpen: false,
  message: '',
  handleClickOK: () => {
    return;
  },
  handleClickCancel: () => {
    return;
  },
};

export const ConfirmDialogContext = createContext<
  [ConfirmDialogState, Dispatch<SetStateAction<ConfirmDialogState>>] | undefined
>(undefined);

export const ConfirmContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [confirm, setConfirm] = useState<ConfirmDialogState>(defaultState);

  return (
    <ConfirmDialogContext.Provider value={[confirm, setConfirm]}>
      {children}
    </ConfirmDialogContext.Provider>
  );
};
