import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserService } from './UserService';
import { PositionService } from './PositionService';

if (!process.env.BASE_API_URL) {
  throw new Error('Please provide all required environment variables');
}

export const getResponseData = (response: AxiosResponse): AxiosResponse =>
  response.data;

const catchError = (error: AxiosError) => {
  if (error.response) {
    return Promise.reject({
      response: 'true',
      data: error.response.data,
      status: error.response.status,
    });
  }
  return Promise.reject({
    response: 'false',
    request: error.request,
  });
};

const baseUrl = process.env.BASE_API_URL;

const http = axios.create({
  baseURL: baseUrl,
});

http.interceptors.response.use(getResponseData, catchError);

export { UserService, PositionService };
export default http;
