import axios from 'axios';
import {
  IResponseData,
  ITokenResponse,
  IUserInfo,
  PostFileFormDataBody,
} from './../atoms/atom';
import { MutateFunction } from 'react-query';

const BASE_URL = 'http://3.39.6.41';
const SPRING_PORT = 8000;
// const FLASK_PORT = 5901;
// const LOCAL_URL = 'http://10.50.75.195';

export const submitFormApi: MutateFunction<
  IResponseData,
  void,
  PostFileFormDataBody
> = async (data: PostFileFormDataBody) => {
  console.log(data);
  const res = await axios.post(`${BASE_URL}:${SPRING_PORT}/send`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res);
  return res.data;
};

export const getChartImage = async (fileId: string) => {
  const res = await axios.get(
    `${BASE_URL}:${SPRING_PORT}/static/images/${fileId}.png`
  );

  return res.data;
};

export const getSummary = async () => {
  const res = await axios.get(`${BASE_URL}:${SPRING_PORT}/summarizer`);
  return res;
};

export const getGoalExplorer = async () => {
  const res = await axios.get(`${BASE_URL}:${SPRING_PORT}/goal_explorer`);
  return res;
};

export const getVisialization = async () => {
  const res = await axios.get(`${BASE_URL}:${SPRING_PORT}/visualization`);
  return res;
};

export const getToken = async (authorizationCode: string) => {
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
  const res = await axios.post<ITokenResponse>(tokenUrl, null, {
    params: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return res.data;
};

export const getUserInfo = async (accessToken: string | null) => {
  if (accessToken == null) {
    return null;
  } else {
    const userInfoUrl = process.env
      .REACT_APP_GOOGLE_OAUTH_USERINFO_URL as string;

    const res = await axios.get<IUserInfo>(userInfoUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return res.data;
  }
};

export const revokeToken = async (accessToken: string) => {
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
