import { Position, User } from '../../stores/types';

export interface UsersResponse {
  success: boolean;
  page: number;
  total_pages: number;
  total_users: number;
  count: number;
  links: {
    next_url: string | null;
    prev_url: string | null;
  };
  users: User[];
}

export interface PositionResponse {
  success: boolean;
  positions: Position[];
}

export interface TokenResponse {
  success: boolean;
  token: string;
}

export interface GeneralFail {
  response: boolean;
}

export interface FailsWithResponse<T = unknown> extends GeneralFail {
  data: DataErrorResponse<T>;
  status: number;
}

export interface DataErrorResponse<T> {
  success: string;
  message: string;
  fails?: {
    [key in keyof T]: string[];
  };
}
