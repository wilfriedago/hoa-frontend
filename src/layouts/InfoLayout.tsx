import type { ComponentProps, PropsWithChildren } from 'react';
import React from 'react';

import { Meta } from './Meta';

type Props = PropsWithChildren<ComponentProps<typeof Meta>>;

export const InfoLayout = ({ children, ...props }: Props) => {
  return (
    <>
      <Meta {...props} />
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">{children}</div>
      </main>
    </>
  );
};
