import { Provider } from 'react-redux';

import { AppStore } from '@/store';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={AppStore}>{children}</Provider>;
};
