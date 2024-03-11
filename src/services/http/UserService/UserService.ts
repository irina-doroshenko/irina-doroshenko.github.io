import http from '..';
import { UsersResponse } from './types';

export class UserService {
  static async getUsers(page: number, count: number): Promise<UsersResponse> {
    return http.get(`/users`, {
      params: {
        page,
        count,
      },
    });
  }
}
