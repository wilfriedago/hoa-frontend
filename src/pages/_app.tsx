import '@/styles/globals.css';
import 'swiper/css';

import { AuthProvider, StoreProvider } from '@/contexts';
import type { AppPropsWithLayout } from '@/utils/types';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  // eslint-disable-next-line global-require
  require('../mocks');
}

const MyApp: AppPropsWithLayout = ({ Component, pageProps }) => {
  const getLayout = Component.layout ?? (page => page);

  return (
    <StoreProvider>
      <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
    </StoreProvider>
  );
};

export default MyApp;
