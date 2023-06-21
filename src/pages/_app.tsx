import '@/styles/globals.css';
import 'swiper/css';

import { Provider } from 'react-redux';

import { AuthProvider, ModalProvider } from '@/contexts';
import store from '@/store';
import type { AppPropsWithLayout } from '@/utils/types';

const MyApp: AppPropsWithLayout = ({ Component, pageProps }) => {
  const getLayout = Component.layout ?? (page => page);

  return (
    <Provider store={store}>
      <ModalProvider>
        <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>
      </ModalProvider>
    </Provider>
  );
};

export default MyApp;
