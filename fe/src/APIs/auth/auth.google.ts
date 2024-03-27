import axios from 'axios';
import {
  IGoogleLoginTokenData,
  IGoogleUserInfo,
} from '../../interface/auth/interface.auth';

export const getGoogleLoginToken = async (authorizationCode: string) => {
  // 기본 요청 매개변수
  const data = {
    grant_type: 'authorization_code',
    code: authorizationCode,
    client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENTID,
    client_secret: process.env.REACT_APP_GOOGLE_OAUTH_CLIENTSECRET,
    redirect_uri: 'http://localhost:3000',
  };

  const tokenUrl = process.env.REACT_APP_GOOGLE_OAUTH_TOKEN_URL as string;

  // POST 요청 수행
  const res = await axios.post<IGoogleLoginTokenData>(tokenUrl, null, {
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return res.data;
};

export const getGoogleLoginUserInfo = async (accessToken: string) => {
  const userInfoUrl = process.env.REACT_APP_GOOGLE_OAUTH_USERINFO_URL as string;

  const res = await axios.get<IGoogleUserInfo>(userInfoUrl, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};

export const revokeGoogleLoginToken = async (accessToken: string) => {
  const revokeTokenUrl = process.env
    .REACT_APP_GOOGLE_OAUTH_REVOKE_TOKEN as string;

  const res = await axios.post(
    revokeTokenUrl,
    { token: accessToken },
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return res;
};
