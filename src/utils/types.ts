import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { FC, ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  layout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = FC<AppProps & { Component: NextPageWithLayout }>;

export type ApiResult<T> = {
  data: T[];
  total: number;
  page: number;
  pageCount: number;
  count: number;
};
