import axios from 'axios';
import { IResponseData, PostFileFormDataBody } from './../atoms/atom';
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
