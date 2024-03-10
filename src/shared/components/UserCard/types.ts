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
