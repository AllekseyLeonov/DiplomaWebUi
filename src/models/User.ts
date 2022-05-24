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

export interface CreateAccountRequest{
  name: string,
  login: string,
  password: string,
}

export interface CreateAccountResponse{
  isSucceed: boolean,
  user: User | null;
}
