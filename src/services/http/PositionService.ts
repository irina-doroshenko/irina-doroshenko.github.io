import http from '.';
import { PositionResponse } from './types';

export class PositionService {
  static async getPositions(): Promise<PositionResponse> {
    return http.get(`/positions`);
  }
}
