export interface TokenModel {
  accessToken:string;
  user: UserModel;
}

export interface UserModel{
  id: number,
  username: string;
  email: string;
}
