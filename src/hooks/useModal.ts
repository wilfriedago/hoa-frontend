import type { ReactNode } from 'react';
import { useCallback, useContext } from 'react';

import { ModalContext } from '@/contexts';

export const useModal = () => {
  const { modalRef } = useContext(ModalContext);

  return {
    show: useCallback((content: ReactNode) => modalRef.current(content), [modalRef]),
    dismiss: useCallback(() => modalRef.current(null, false), [modalRef])
  };
};
