import type { FC } from 'react';

import { Button } from './button';

type ConfirmDialogProps = {
  title: string;
  description?: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  title,
  description,
  onConfirm,
  onCancel,
  confirmLabel = 'Confirmer'
}) => {
  return (
    <div className="flex min-h-full items-center justify-center p-4 text-center">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
        <h3 className="text-lg font-medium leading-6 text-gray-900">{title}</h3>
        <div className="mt-2">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <div className="mt-4 flex justify-end gap-x-3">
          <Button onClick={onConfirm} className="bg-rose-600 hover:bg-rose-500">
            {confirmLabel}
          </Button>
          <Button onClick={onCancel} variant="outline">
            Annuler
          </Button>
        </div>
      </div>
    </div>
  );
};
