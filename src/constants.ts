export const apiConstants = {
  core: {},
  logto: {
    baseUrl: ''
  }
};

export const libConstants = {
  logto: {
    endpoints: {
      signIn: '/api/logto/sign-in',
      signUp: '/api/logto/register',
      signOut: '/api/logto/sign-out',
      user: '/api/logto/user'
    }
  }
};

export const appConstants = {
  pages: {
    public: {
      home: '/',
      about: '/about',
      contact: '/contact',
      unauthorized: '/403',
      notFound: '/404',
      serverError: '/500'
    },
    protected: {
      profile: '/profile'
    }
  }
};

export enum StorageKeys {}

export enum StoreKeys {
  LOGTO_API = 'logToApi'
}
