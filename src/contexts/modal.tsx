import type { PropsWithChildren, ReactNode } from 'react';
import { createContext, useContext, useMemo, useRef, useState } from 'react';

import { ModalDialog } from '@/components/ui/modal';

const defaultFunction = (_content?: ReactNode, _open?: boolean) => Promise.resolve(true);

export const ModalContext = createContext({
  modalRef: { current: defaultFunction }
});

const ModalDialogWithContext = () => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState<ReactNode | undefined>();

  const resolveRef = useRef((_v: boolean) => {});

  const { modalRef } = useContext(ModalContext);

  const handleClose = () => {
    resolveRef.current(true);
    setOpen(false);
  };

  modalRef.current = (_content, _open) =>
    new Promise(resolve => {
      setContent(_content);
      setOpen(_open ?? true);

      resolveRef.current = resolve;
    });

  return <ModalDialog content={content} open={open} onClose={handleClose} />;
};

export const ModalProvider = ({ children }: PropsWithChildren) => {
  const modalRef = useRef(defaultFunction);

  const modalContextValue = useMemo(
    () => ({
      modalRef
    }),
    [modalRef]
  );

  return (
    <ModalContext.Provider value={modalContextValue}>
      {children}
      <ModalDialogWithContext />
    </ModalContext.Provider>
  );
};
