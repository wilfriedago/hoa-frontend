import { useContext } from 'react';

import { AuthContext } from '@/contexts';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context)
    throw new Error(
      'useAuth must be used within a AuthProvider. Maybe you forgot to wrap your app in a <AuthProvider> tag?'
    );

  return context;
};
