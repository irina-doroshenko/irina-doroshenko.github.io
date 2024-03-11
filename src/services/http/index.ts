import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserService } from './UserService';

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

const http = axios.create({
  baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
});

http.interceptors.response.use(getResponseData, catchError);

export { UserService };
export default http;
