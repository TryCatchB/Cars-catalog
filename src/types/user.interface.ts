export interface IUserData {
  name: string;
  email: string;
  phone: string;
}

export interface IUser extends IUserData {
  id: number;
}
