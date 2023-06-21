import LogtoClient from '@logto/next';

import { libConfig } from '@/config';
import { libConstants } from '@/constants';

export const logtoClient = new LogtoClient(libConfig.logto);

export const signIn = () => window.location.assign(libConstants.logto.endpoints.signIn);
export const signUp = () => window.location.assign(libConstants.logto.endpoints.signUp);
export const signOut = () => window.location.assign(libConstants.logto.endpoints.signOut);
