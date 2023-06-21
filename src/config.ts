export const appConfig = {
  site_name: '',
  title: '',
  description: '',
  locale: 'fr',
  baseUrl: process.env.NEXT_PUBLIC_APP_ENDPOINT as string
};

export const apiConfig = {
  core: {},
  logto: {
    baseUrl: ''
  }
};

export const libConfig = {
  logto: {
    baseUrl: appConfig.baseUrl,
    appId: process.env.NEXT_PUBLIC_LOGTO_APP_ID as string,
    endpoint: process.env.NEXT_PUBLIC_LOGTO_ENDPOINT as string,
    appSecret: process.env.NEXT_PUBLIC_LOGTO_APP_SECRET as string,
    cookieSecret: process.env.NEXT_PUBLIC_LOGTO_COOKIE_SECRET as string,
    cookieSecure: process.env.NODE_ENV === 'production',
    scopes: ['email', 'phone', 'custom_data', 'identities']
  }
};
