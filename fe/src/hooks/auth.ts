import { useHistory } from 'react-router-dom';
import { TokenKey, isGoogleUser } from '../interface/auth/interface.auth';
import { useEmailLoginTokenValid } from './useEmailLoginTokenValid';
import { useGoogleAccessTokenVaild } from './useGoogleAccessTokenVaild';

export const useAuth = (onSuccessRedirectUrl?: string) => {
  const data: string | null = localStorage.getItem(TokenKey.accessToken);

  let accessTokenData: null | {
    access_token: string;
    domain: 'email' | 'google';
  };

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
      if (accessTokenData?.domain === 'google') {
        googleAuth(accessTokenData.access_token);
      } else {
        emailAuth(accessTokenData.access_token);
      }
    }
  };

  return auth;
};
