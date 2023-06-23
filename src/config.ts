export const appConfig = {
  site_name: '',
  title: '',
  description: '',
  locale: 'fr',
  baseUrl: process.env.NEXT_PUBLIC_APP_ENDPOINT as string
};

export const apiConfig = {
  core: {
    baseUrl: process.env.NEXT_PUBLIC_API_CORE_ENDPOINT as string
  },
  logto: {
    baseUrl: process.env.NEXT_PUBLIC_API_LOGTO_ENDPOINT as string
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

    resources: ['http://localhost:8888'], // TODO : replace with process.env.NEXT_PUBLIC_LOGTO_RESOURCES?.split(','),
    scopes: process.env.NEXT_PUBLIC_LOGTO_SCOPES?.split(',')
  }
};
