import { type ComponentProps } from 'react';

import { ConfirmDialog } from '@/components/ui/confirm';

import { useModal } from './useModal';

type Params = ComponentProps<typeof ConfirmDialog>;

export const useConfirm = () => {
  const modal = useModal();

  return {
    show: (params: Params) => modal.show(<ConfirmDialog {...params} />),
    dismiss: () => modal.dismiss()
  };
};
