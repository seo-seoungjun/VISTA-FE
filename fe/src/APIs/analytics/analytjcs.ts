import axios from 'axios';
import { MutateFunction } from 'react-query';
import {
  IResponseData,
  PostFormDataBody,
} from '../../interface/analytics/interface.analytics';

// const BASE_URL = 'http://3.39.6.41';
const DNS = 'http://techvista24.com';
const SPRING_PORT = 8000;

export const submitFormApi: MutateFunction<
  IResponseData,
  void,
  PostFormDataBody
> = async (data: PostFormDataBody) => {
  console.log(data);
  const res = await axios.post(`${DNS}:${SPRING_PORT}/send`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  console.log(res);
  return res.data;
};

export const getChartImage = async (fileId: string) => {
  const res = await axios.get(
    `${DNS}:${SPRING_PORT}/static/images/${fileId}.png`
  );

  return res.data;
};
