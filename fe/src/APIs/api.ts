import axios from 'axios';
import { ISettings } from './../atoms/atom';

const BASE_URL = 'http://3.39.6.41';
const SPRING_PORT = 8080;
const FLASK_PORT = 5901;

export const submitFormApi = async (data: ISettings) => {
  const res = await axios.post(`${BASE_URL}:${SPRING_PORT}/send`, data);
  return res.data;
};

export const getSummary = async () => {
  const res = await axios.get(`${BASE_URL}:${FLASK_PORT}/summariser`);
  return res.data;
};

export const getGoalExplorer = async () => {
  const res = await axios.get(`${BASE_URL}:${FLASK_PORT}/goal_explorer`);
  return res.data;
};

export const getVisialization = async () => {
  const res = await axios.get(`${BASE_URL}:${FLASK_PORT}/visualization`);
  return res.data;
};
