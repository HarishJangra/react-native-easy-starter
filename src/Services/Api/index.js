import {create} from 'apisauce';
import {BASE_URL} from '../../Config';
import apiMonitor from './Monitor';
//import setInterceptor from './Interceptor';

export const URIS = {
  VERSION: 'app/version',
  LOGIN: 'login',
  REFRESH: 'refresh',
  LOGOUT: 'logout',
};

const createApiClient = (baseURL = BASE_URL) => {
  let api = create({
    baseURL,
    headers: {
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    timeout: 15000,
  });

  api.addMonitor(apiMonitor);
  // use interceptor if using oAuth for authentication
  // setInterceptor(api);

  const setAuthorizationHeader = access_token =>
    api.setHeader('Authorization', 'Bearer ' + access_token);

  const loginUser = payload => api.post(URIS.LOGIN, payload);

  //kickoff our api functions
  return {
    // client modifiers
    setAuthorizationHeader,
    // checkAppVersion,
    loginUser,
  };
};

export default {createApiClient};
