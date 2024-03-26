import axios from 'axios';
import { PostFormDataBody } from '../../interface/analytics/interface.analytics';

const DNS = 'http://techvista24.com';
const SPRING_PORT = 8000;

export const SignUp = async (data: PostFormDataBody) => {
  const res = await axios.post(`${DNS}:${SPRING_PORT}/user/register`, data);

  return res.data;
};

export const EmailLogIn = async (data: PostFormDataBody) => {
  const res = await axios.post(`${DNS}:${SPRING_PORT}/user/login`, data);

  return res.data;
};

export const getEmailLoginUserInfo = async (accessToken: string) => {
  const res = await axios.get(`${DNS}:${SPRING_PORT}/user/protected`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return res.data;
};
