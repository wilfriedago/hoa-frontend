import { logtoClient } from '@/lib/logto';

export default logtoClient.handleAuthRoutes({
  fetchUserInfo: true,
  getAccessToken: true,
  resource: 'http://localhost:8888' // TODO: replace with libConfig.logto.resources
});
