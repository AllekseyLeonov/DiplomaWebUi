export interface User{
  id: string,
  name: string,
  login: string,
  password: string,
}

export interface LoginResponse{
  isSucceed: boolean,
  user: User | null;
}
