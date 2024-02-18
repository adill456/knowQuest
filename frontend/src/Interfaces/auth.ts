export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  role: string;
}

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: string;
  id: string;
  created_at: string;
  updated_at: string;
}
