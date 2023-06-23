import type { LogtoContext } from '@logto/next';
import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { createContext, type PropsWithChildren, useEffect, useMemo, useState } from 'react';

import { setUser, useGetSessionQuery } from '@/features/auth';
import { useAppDispatch } from '@/store';

type AuthContextProps = LogtoContext & {
  isError: boolean;
  isLoading: boolean;
  error?: FetchBaseQueryError | SerializedError;
};

export const AuthContext = createContext<AuthContextProps>({
  isError: true,
  isLoading: true,
  isAuthenticated: false
});

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const dispatch = useAppDispatch();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (window) setIsMounted(true);
  }, []);

  const { data, error, isError, isLoading } = useGetSessionQuery();

  dispatch(setUser(data as LogtoContext));

  const authContextValue = useMemo(
    () => ({
      ...(data as LogtoContext),
      isLoading,
      isError,
      error
    }),
    [data, isLoading, isError, error]
  );

  if (!isMounted) return null;

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
