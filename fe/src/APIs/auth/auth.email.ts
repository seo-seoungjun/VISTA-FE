import { IEmailUserInfo } from './../../interface/auth/interface.auth';
import axios from 'axios';
import { PostFormDataBody } from '../../interface/analytics/interface.analytics';
import {
  IEmailLoginTokenData,
  ILocalTokenData,
  ILogin,
} from '../../interface/auth/interface.auth';

require('dotenv').config();

const DNS = process.env.REACT_APP_DNS;
const SPRING_PORT = process.env.REACT_APP_PORT;

export const SignUp = async (data: PostFormDataBody) => {
  const res = await axios.post(`${DNS}:${SPRING_PORT}/user/register`, data);

  return res.data;
};

export const getEmailLoginToken = async (data: ILogin) => {
  const res = await axios.post<IEmailLoginTokenData>(
    `${DNS}:${SPRING_PORT}/user/login`,
    data,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  return res.data;
};

export const getEmailLoginUserInfo = async (tokenData: ILocalTokenData) => {
  const res = await axios.get<IEmailUserInfo>(
    `${DNS}:${SPRING_PORT}/user/protected`,
    {
      headers: {
        Authorization: `Bearer ${tokenData.access_token}`,
        token_type: tokenData.domain,
      },
    }
  );

  return res.data;
};
