import { useHistory } from 'react-router-dom';
import { ILocalTokenData, TokenKey } from '../interface/auth/interface.auth';
import { useEmailLoginTokenValid } from './useEmailLoginTokenValid';
import { useGoogleAccessTokenVaild } from './useGoogleAccessTokenVaild';

export const useAuth = (onSuccessRedirectUrl?: string) => {
  const data: string | null = localStorage.getItem(TokenKey.accessToken);

  let accessTokenData: null | ILocalTokenData;

  if (data === null) {
    accessTokenData = null;
  } else {
    accessTokenData = JSON.parse(data);
  }

  const history = useHistory();

  const googleAuth = useGoogleAccessTokenVaild(onSuccessRedirectUrl);
  const emailAuth = useEmailLoginTokenValid(onSuccessRedirectUrl);

  const auth = () => {
    if (accessTokenData === null) {
      history.push('/login');
    } else {
      if (accessTokenData?.domain === 'Google') {
        googleAuth(accessTokenData.access_token);
      } else {
        emailAuth({
          access_token: accessTokenData.access_token,
          domain: accessTokenData.domain,
        });
      }
    }
  };

  return auth;
};
