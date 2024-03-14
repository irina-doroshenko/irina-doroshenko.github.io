import http from '.';
import { SignUpFormData } from '../../sections/SignUp/components/SignUpForm/types';
import { TokenResponse, UsersResponse } from './types';

export class UserService {
  static async getUsers(page: number, count: number): Promise<UsersResponse> {
    return http.get(`/users`, {
      params: {
        page,
        count,
      },
    });
  }

  static async getToken(): Promise<TokenResponse> {
    return http.get(`/token`);
  }

  static async createUser(
    userFormData: SignUpFormData,
    token: string
  ): Promise<void> {
    return http.post(`/users`, userFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Token: token,
      },
    });
  }
}
