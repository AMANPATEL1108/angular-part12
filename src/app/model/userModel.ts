export interface UserModel {
  id?: number; // optional because the backend generates it
  name: string;
  email: string;
  address: string;
}
