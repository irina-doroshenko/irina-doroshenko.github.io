export interface SignUpFormData {
  name: string;
  email: string;
  phone: string;
  position_id: number | string;
  photo: File | null;
}

export type responseErr = { [key in keyof SignUpFormData]: string };
