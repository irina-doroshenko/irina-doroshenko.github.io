export interface Position {
  id: number;
  name: string;
}

export interface User {
  id: string | number;
  name: string;
  email: string;
  phone: string;
  position: string;
  position_id: string | number;
  registration_timestamp: string;
  photo?: string;
}
